import React, { useState } from 'react';
import './Departments.css';
const departmentsData = [
  {
    name: 'CRITICAL CARE',
    desc: `Our Critical Care unit is a state-of-the-art facility equipped with advanced life-support systems, high-frequency ventilators, and continuous hemodynamic monitoring equipment. We provide 24/7 intensive care for patients with life-threatening conditions including:
- Multi-organ failure
- Severe trauma cases
- Post-operative complications
- Cardiac emergencies
- Neurological crises

Our multidisciplinary team includes intensivists, critical care nurses, respiratory therapists, and specialists who collaborate to provide personalized treatment plans. We utilize advanced protocols for sepsis management, ARDS treatment, and targeted temperature management. The unit features:
- 20 fully equipped ICU beds
- Negative pressure isolation rooms
- Central monitoring station
- Dedicated pharmacy services
- 24/7 diagnostic support`,
    images: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'IVF',
    desc: `Our In Vitro Fertilization (IVF) Center offers comprehensive fertility solutions with success rates exceeding national averages. Services include:
- Advanced reproductive technologies (ICSI, IMSI)
- Preimplantation genetic testing (PGT)
- Egg/sperm donation programs
- Fertility preservation (egg freezing)
- Male infertility treatments

Our embryology lab is equipped with:
- Time-lapse embryo monitoring
- Laser-assisted hatching
- Cryopreservation facilities
- Advanced air filtration systems

We provide psychological counseling and support groups for couples throughout their fertility journey.`,
    images: [
      'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'CARDIOLOGY',
    desc: `The Cardiology Department provides comprehensive cardiac care with cutting-edge diagnostic and therapeutic services:
- 128-slice Cardiac CT
- 3D Echocardiography
- Treadmill stress testing
- Nuclear cardiology
- Electrophysiology studies

Interventional Procedures:
- Coronary angioplasty (PCI)
- Structural heart interventions (TAVI)
- Pacemaker/ICD implantation
- Rotablation for calcified lesions
- FFR/iFR guided interventions

Specialized Clinics:
- Heart failure clinic
- Arrhythmia clinic
- Preventive cardiology
- Women's heart health`,
    images: [
      'https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'CTVS',
    desc: `The Cardiothoracic and Vascular Surgery (CTVS) department specializes in advanced surgical treatments for heart, lung, and vascular conditions:
- Coronary artery bypass grafting (CABG)
- Valve repair/replacement
- Aortic aneurysm surgery
- Congenital heart defect corrections
- Minimally invasive cardiac surgery

Thoracic Surgeries:
- Lung cancer resections
- Video-assisted thoracoscopic surgery (VATS)
- Esophageal surgeries
- Mediastinal tumor removal

Vascular Surgeries:
- Carotid endarterectomy
- Peripheral vascular bypass
- Endovascular aneurysm repair (EVAR)
- Dialysis access procedures`,
    images: [
      'https://images.unsplash.com/photo-1581595219324-c6d1f1a4a0a5?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581595219405-ba04b5f01a0e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551601651-bc60f254d532?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'NEPHROLOGY',
    desc: `Comprehensive kidney care services for acute and chronic conditions:
- Hemodialysis (30 stations)
- Peritoneal dialysis program
- Kidney biopsy
- Plasmapheresis
- Kidney transplantation

Specialized Clinics:
- Chronic kidney disease clinic
- Hypertension clinic
- Diabetic kidney disease clinic
- Kidney stone clinic`,
    images: [
      'https://images.unsplash.com/photo-1588776814546-ec7e4b2b1b7b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581595219405-ba04b5f01a0e?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'MEDICAL ONCOLOGY',
    desc: `Comprehensive cancer treatment with personalized care plans:
- Chemotherapy (conventional & targeted)
- Immunotherapy
- Hormonal therapy
- Biological therapy
- Clinical trials

Specialized Services:
- Genetic counseling
- Pain and palliative care
- Nutritional support
- Psychosocial counseling
- Survivorship programs`,
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581595219405-ba04b5f01a0e?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'MEDICAL GASTENTEROLOGY',
    desc: `We offer advanced diagnosis and treatment for digestive system disorders, including endoscopy and liver care. 
Our specialists manage a wide range of gastrointestinal diseases with a patient-centered approach.`,
    images: [
      'https://images.unsplash.com/photo-1512070679279-cff1e710c8c7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'RADIATION ONCOLOGY',
    desc: `Our Radiation Oncology department uses state-of-the-art technology for precise and effective cancer treatment. 
We ensure patient safety and comfort throughout the treatment process.`,
    images: [
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'NEURO PHYSICIAN',
    desc: `Expert neurologists provide diagnosis and treatment for neurological disorders such as stroke, epilepsy, and Parkinson’s disease. 
We offer advanced neuroimaging and neurophysiology services.`,
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'EMERGENCY MEDICINE',
    desc: `Our Emergency Medicine department is open 24/7, equipped to handle all medical and surgical emergencies. 
We provide rapid assessment, stabilization, and treatment for all age groups.`,
    images: [
      'https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'RADIOLOGY',
    desc: `We provide advanced imaging services including MRI, CT, ultrasound, and X-ray for accurate diagnosis. 
Our radiologists use the latest technology for precise and safe imaging.`,
    images: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512070679279-cff1e710c8c7?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'RESPIRATORY MEDICINE',
    desc: `Specialized care for respiratory diseases such as asthma, COPD, and tuberculosis. 
Our team provides pulmonary function testing, bronchoscopy, and long-term management.`,
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'DVL',
    desc: `Our Dermatology, Venereology, and Leprosy (DVL) department offers expert skin, hair, and nail care. 
We provide advanced treatments for all dermatological conditions.`,
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'PSYCHIATRY',
    desc: `Comprehensive mental health services including counseling, therapy, and medication management. 
Our psychiatrists and psychologists provide compassionate care for all age groups.`,
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'GENERAL SURGERY',
    desc: `Our surgeons perform a wide range of procedures with a focus on patient safety and recovery. 
We use minimally invasive techniques for faster healing and less pain.`,
    images: [
      'https://images.unsplash.com/photo-1467271383973-173cfb1b7c93?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'UROLOGY',
    desc: `Expert care for urinary tract and male reproductive system disorders. 
We offer advanced diagnostics, minimally invasive surgery, and comprehensive management.`,
    images: [
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'NEURO SURGERY',
    desc: `Advanced neurosurgical procedures for brain, spine, and nerve disorders. 
Our team uses the latest technology for safe and effective outcomes.`,
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'PLASTIC SURGERY',
    desc: `Reconstructive and cosmetic surgeries performed by skilled plastic surgeons. 
We focus on restoring function and enhancing appearance.`,
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'SURGICAL ONCOLOGY',
    desc: `Specialized surgical care for cancer patients, focusing on tumor removal and recovery. 
Our surgeons work closely with oncologists for integrated cancer care.`,
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'ENDOCRINE SURGERY',
    desc: `Expertise in surgeries of endocrine glands such as thyroid, parathyroid, and adrenal glands. 
We use minimally invasive techniques for better outcomes.`,
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'SURGICAL GASTROENTEROLOGY',
    desc: `Advanced surgical care for gastrointestinal diseases and disorders. 
Our team performs complex GI surgeries with a focus on patient safety.`,
    images: [
      'https://images.unsplash.com/photo-1512070679279-cff1e710c8c7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'ORTHOPEDICS',
    desc: `Comprehensive care for bone, joint, and muscle problems, including joint replacement and sports injuries. 
We use advanced imaging and minimally invasive techniques for faster recovery.`,
    images: [
      'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'OTO RINO LARYNGOLOGY(ENT)',
    desc: `Diagnosis and treatment of ear, nose, and throat disorders with advanced technology. 
Our ENT specialists provide both medical and surgical care.`,
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'OPHTHALMOLOGY',
    desc: `Comprehensive eye care services including cataract, glaucoma, and retinal surgeries. 
Our ophthalmologists use the latest technology for vision restoration.`,
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'DENTAL',
    desc: `Full range of dental services from preventive care to advanced dental surgeries. 
Our dentists use modern equipment for painless and effective treatments.`,
    images: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'OBSTETRICS & GYNAECOLOGY',
    desc: `Comprehensive women’s health services including maternity, gynecological surgeries, and infertility treatments. 
Our team provides compassionate care for women at every stage of life.`,
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'PAEDIATRICS',
    desc: `Expert pediatricians providing care for infants, children, and adolescents. 
We offer immunizations, growth monitoring, and specialized pediatric care.`,
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    name: 'ANAESTHESIA',
    desc: `Safe and effective anesthesia services for all types of surgeries and procedures. 
Our anesthesiologists ensure patient comfort and safety before, during, and after surgery.`,
    images: [
      'https://images.unsplash.com/photo-1467271383973-173cfb1b7c93?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

const Departments = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="departments-container">
      <div className="departments-sidebar">
        <h3>Our Departments</h3>
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
              alt={`${departmentsData[activeIndex].name} illustration ${i + 1}`}
              className="department-img"
            />
          ))}
        </div>
        <div className="department-description">
          {departmentsData[activeIndex].desc.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;