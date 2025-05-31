import React, { useState } from 'react';
import './Departments.css';

const departmentsData = [
  {
    name: 'CRITICAL CARE',
    desc: `Our 24-bed ICU features:
    • Advanced ventilators (including ECMO)
    • Continuous hemodynamic monitoring
    • Mobile CT scanner access
    • Dedicated isolation rooms
    Specializing in:
    - Sepsis management
    - Multi-organ failure
    - Post-cardiac arrest care`,
    images: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
      'https://images.unsplash.com/photo-1581595219315-a187dd40c322'
    ]
  },
  {
    name: 'IVF',
    desc: `Fertility services include:
    • IVF/ICSI (65% success rate)
    • Egg freezing
    • Genetic testing (PGD/PGS)
    • Donor programs
    Lab features:
    - EmbryoScope incubators
    - Laser-assisted hatching`,
    images: [
      'https://images.unsplash.com/photo-1579684453423-f84349ef60b0',
      'https://images.unsplash.com/photo-1575505586569-646b2ca898fc'
    ]
  },
  {
    name: 'CARDIOLOGY',
    desc: `Services:
    • 24/7 Cath lab (STEMI care)
    • 3D echocardiography
    • TAVR procedures
    • Electrophysiology studies
    Specialized clinics:
    - Heart failure
    - Arrhythmia`,
    images: [
      'https://images.unsplash.com/photo-1551601651-bc60f254d532',
      'https://images.unsplash.com/photo-1581595219405-ba04b5f01a0e'
    ]
  },
  {
    name: 'CTVS',
    desc: `Surgeries performed:
    • Beating heart CABG
    • Valve replacements
    • Lung resections
    • Aortic repairs
    Facilities:
    - Hybrid OR
    - ECMO support`,
    images: [
      'https://images.unsplash.com/photo-1581595219405-ba04b5f01a0e',
      'https://images.unsplash.com/photo-1551601651-bc60f254d532'
    ]
  },
  {
    name: 'NEPHROLOGY',
    desc: `Services:
    • 30 dialysis stations
    • Kidney transplants
    • Plasma exchange
    Specialized care for:
    - Diabetic nephropathy
    - Hypertension`,
    images: [
      'https://images.unsplash.com/photo-1581595219405-ba04b5f01a0e',
      'https://images.unsplash.com/photo-1579684453423-f84349ef60b0'
    ]
  },
  {
    name: 'MEDICAL ONCOLOGY',
    desc: `Treatments:
    • Chemotherapy
    • Immunotherapy
    • Targeted therapy
    Special programs:
    - Tumor boards
    - Genetic counseling`,
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118'
    ]
  },
  {
    name: 'GASTROENTEROLOGY',
    desc: `Procedures:
    • Endoscopy/Colonoscopy
    • ERCP
    • Liver biopsy
    Special clinics:
    - IBD center
    - Hepatology`,
    images: [
      'https://images.unsplash.com/photo-1512070679279-cff1e710c8c7',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41'
    ]
  },
  {
    name: 'RADIATION ONCOLOGY',
    desc: `Technologies:
    • Linear accelerator
    • Brachytherapy
    • SRS/SBRT
    Specialized for:
    - Prostate cancer
    - Brain tumors`,
    images: [
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca'
    ]
  },
  {
    name: 'NEUROLOGY',
    desc: `Services:
    • EEG/EMG/NCS
    • Botox therapy
    • Stroke thrombolysis
    Special clinics:
    - Epilepsy
    - Movement disorders`,
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ]
  },
  {
    name: 'EMERGENCY MEDICINE',
    desc: `Features:
    • Level 1 Trauma Center
    • 24/7 emergency care
    • Pediatric ER
    • Chest pain protocol`,
    images: [
      'https://images.unsplash.com/photo-1460672985063-6764ac8b9c74',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7'
    ]
  },
  {
    name: 'RADIOLOGY',
    desc: `Imaging modalities:
    • 3T MRI
    • 128-slice CT
    • Digital mammography
    • PET-CT`,
    images: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    ]
  },
  {
    name: 'RESPIRATORY MEDICINE',
    desc: `Services:
    • Pulmonary function tests
    • Bronchoscopy
    • Sleep studies
    Specializing in:
    - COPD
    - ILD`,
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ]
  },
  {
    name: 'DERMATOLOGY (DVL)',
    desc: `Treatments:
    • Psoriasis biologics
    • Laser therapy
    • Mohs surgery
    Special clinics:
    - Acne
    - Pigment disorders`,
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
    ]
  },
  {
    name: 'PSYCHIATRY',
    desc: `Services:
    • CBT/DBT therapy
    • TMS treatment
    • Addiction medicine
    Special programs:
    - Geriatric psychiatry
    - Child ADHD clinic`,
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ]
  },
  {
    name: 'GENERAL SURGERY',
    desc: `Procedures:
    • Laparoscopic surgeries
    • Hernia repairs
    • Breast surgery
    • Thyroidectomy`,
    images: [
      'https://images.unsplash.com/photo-1467271383973-173cfb1b7c93',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7'
    ]
  },
  {
    name: 'UROLOGY',
    desc: `Services:
    • RIRS/PCNL
    • TURP
    • Uro-oncology
    Specialized for:
    - Kidney stones
    - Prostate care`,
    images: [
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
      'https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8'
    ]
  },
  {
    name: 'NEUROSURGERY',
    desc: `Advanced procedures:
    • Brain tumor surgery
    • Spine instrumentation
    • DBS implantation
    • Aneurysm clipping`,
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
    ]
  },
  {
    name: 'PLASTIC SURGERY',
    desc: `Services:
    • Microvascular reconstruction
    • Cosmetic surgery
    • Burn care
    • Hand surgery`,
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7'
    ]
  },
  {
    name: 'SURGICAL ONCOLOGY',
    desc: `Cancer surgeries:
    • Whipple procedure
    • Radical mastectomy
    • CRS/HIPEC
    • Limb salvage surgery`,
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ]
  },
  {
    name: 'ENDOCRINE SURGERY',
    desc: `Specialized in:
    • Thyroid/Parathyroid
    • Adrenal surgery
    • Pancreatic islet cell
    Techniques:
    - Minimally invasive
    - Robotic-assisted`,
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
    ]
  },
  {
    name: 'GASTRO SURGERY',
    desc: `Procedures:
    • Bariatric surgery
    • Colorectal surgery
    • Hepato-biliary
    • GERD treatment`,
    images: [
      'https://images.unsplash.com/photo-1512070679279-cff1e710c8c7',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41'
    ]
  },
  {
    name: 'ORTHOPEDICS',
    desc: `Services:
    • Joint replacements
    • Sports medicine
    • Spine surgery
    • Trauma care`,
    images: [
      'https://images.unsplash.com/photo-1519864600265-abb23847ef2c',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ]
  },
  {
    name: 'ENT',
    desc: `Treatments:
    • Cochlear implants
    • FESS
    • Head & neck oncology
    • Voice therapy`,
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
    ]
  },
  {
    name: 'OPHTHALMOLOGY',
    desc: `Services:
    • Cataract surgery
    • LASIK/PRK
    • Retinal procedures
    • Glaucoma management`,
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
    ]
  },
  {
    name: 'DENTAL',
    desc: `Specialties:
    • Oral surgery
    • Implantology
    • Orthodontics
    • Endodontics`,
    images: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ]
  },
  {
    name: 'OBGYN',
    desc: `Services:
    • High-risk pregnancy care
    • Laparoscopic gynecology
    • Fertility preservation
    • Urogynecology`,
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ]
  },
  {
    name: 'PEDIATRICS',
    desc: `Specialized care for:
    • Neonatology (NICU)
    • Pediatric cardiology
    • Adolescent medicine
    • Vaccination programs`,
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ]
  },
  {
    name: 'ANESTHESIA',
    desc: `Services:
    • General anesthesia
    • Regional blocks
    • Pain management
    • Critical care intubations`,
    images: [
      'https://images.unsplash.com/photo-1467271383973-173cfb1b7c93',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7'
    ]
  }
];

const Departments = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="departments-container">
      <div className="departments-sidebar">
        <h3>OUR DEPARTMENTS</h3>
        <ul>
          {departmentsData.map((dept, idx) => (
            <li 
              key={dept.name}
              className={activeIndex === idx ? 'active' : ''}
              onClick={() => setActiveIndex(idx)}
            >
              {dept.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="departments-content">
        <h2>{departmentsData[activeIndex].name}</h2>
        
        <div className="department-images">
          {departmentsData[activeIndex].images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${departmentsData[activeIndex].name} department`}
            />
          ))}
        </div>

        <div className="department-desc">
          {departmentsData[activeIndex].desc.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;