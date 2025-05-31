import React from 'react';
import './Doctars.css'

const doctorsData = [
  {
    department: 'GENERAL MEDICINE',
    doctors: [
      { empId: '50100044', name: 'Dr.K Sudheer', designation: 'PROFESSOR & HOD', mobile: '9666123122' },
      { empId: 'D-5163', name: 'Dr.M Madhusudhana Babu', designation: 'PROFESSOR', mobile: '9849127576' },
      { empId: '50500059', name: 'Dr.Anand Sankar Sastry', designation: 'PROFESSOR', mobile: '7978842394' },
      { empId: '50400191', name: 'Dr.W.Santha Rajaratnam', designation: 'ASST. PROFESSOR', mobile: '9705322866' },
      { empId: '50400252', name: 'Dr.Boddepalli Madhuri', designation: 'SENIOR RESIDENT', mobile: '9494583129' },
      { empId: '50400261', name: 'Dr.Palli Kanchanamala', designation: 'SENIOR RESIDENT', mobile: '9494204572' },
      { empId: '50400262', name: 'Dr.Bandaru Venkata Satya Sujit', designation: 'SENIOR RESIDENT', mobile: '9538434363' }
    ]
  },
  {
    department: 'CRITICAL CARE',
    doctors: [
      { empId: '50500046', name: 'Dr.A.Sivanwesh', designation: 'CONSULTANT', mobile: '8500730742' },
      { empId: '50500061', name: 'Dr.CHERISHMANJALI SABBAVARAPU', designation: 'Jr. Consultant', mobile: '9492317338' },
      { empId: '50400210', name: 'Dr.MOULISRI BODLA', designation: 'Jr. Resident', mobile: '8919356592' }
    ]
  },
  {
    department: 'IVF',
    doctors: [
      { empId: '50500065', name: 'Dr.Vijaya Sirisha Balaga', designation: 'CONSULTANT', mobile: '9515309397' }
    ]
  },
  {
    department: 'CARDIOLOGY',
    doctors: [
      { empId: '50500021', name: 'Dr.LKV Kumar Kesamsetty', designation: 'CONSULTANT', mobile: '9989102302' },
      { empId: '50500041', name: 'Dr.B. Sai Teja', designation: 'CONSULTANT', mobile: '9885766212' }
    ]
  },
  {
    department: 'CTVS',
    doctors: [
      { empId: '50500057', name: 'Dr.Kudituri Santosh Kumar', designation: 'CONSULTANT', mobile: '9000791094' },
      { empId: '50400128', name: 'Dr.Deepa SD', designation: 'ASST. PROFESSOR', mobile: '9482218066' }
    ]
  },
  {
    department: 'NEPHROLOGY',
    doctors: [
      { empId: '50500034', name: 'Dr.Anjani Achanta', designation: 'CONSULTANT', mobile: '8897307110' },
      { empId: '50500069', name: 'Dr.Gorakala Giribabu', designation: 'CONSULTANT', mobile: '9000144391' }
    ]
  },
  {
    department: 'MEDICAL ONCOLOGY',
    doctors: [
      { empId: '50500062', name: 'Dr.Gowrisankar Bommi', designation: 'CONSULTANT', mobile: '8106516195' }
    ]
  },
  {
    department: 'MEDICAL GASTENTEROLOGY',
    doctors: [
      { empId: '50500050', name: 'Dr.Palle Sriharsha', designation: 'CONSULTANT', mobile: '7794912564' }
    ]
  },
  {
    department: 'RADIATION ONCOLOGY',
    doctors: [
      { empId: '50500009', name: 'Dr.M Venkata Ramana', designation: 'CONSULTANT', mobile: '9441125245' },
      { empId: '50500029', name: 'Dr.Y.Sree Sowmya', designation: 'SENIOR RESIDENT', mobile: '7780564041' }
    ]
  },
  {
    department: 'NEURO PHYSICIAN',
    doctors: [
      { empId: '50500038', name: 'Dr.Sutar Priya Vasant', designation: 'CONSULTANT', mobile: '9494448270' },
      { empId: '50500052', name: 'Dr.Usharani Budumuru', designation: 'CONSULTANT', mobile: '9885142131' }
    ]
  },
  {
    department: 'EMERGENCY MEDICINE',
    doctors: [
      { empId: '50600012', name: 'Dr.B.Murali Krishna', designation: 'PROFESSOR', mobile: '9866511303' },
      { empId: '50100341', name: 'Dr.P.Namrata', designation: 'ASSOCIATE PROFESSOR', mobile: '9705192526' },
      { empId: '50400095', name: 'Dr.D.Kalyani', designation: 'ASSISTANT PROFESSOR', mobile: '7993433994' },
      { empId: '50400223', name: 'Dr.G.Sneha', designation: 'SENIOR RESIDENT', mobile: '9441188944' },
      { empId: '50400200', name: 'Dr. Prabhu Bammidi', designation: 'SENIOR RESIDENT', mobile: '8884724785' },
      { empId: '50500010', name: 'Dr.Varanasi Sandeep Kumar', designation: 'JUNIOR RESIDENT', mobile: '9019320390' },
      { empId: '50100675', name: 'Dr.Naresh Kumar Paidi', designation: 'JUNIOR RESIDENT', mobile: '9717462643' }
    ]
  },
  {
    department: 'RADIOLOGY',
    doctors: [
      { empId: '50600013', name: 'Dr.M.Rupesh', designation: 'PROFESSOR & HOD', mobile: '9444943117' },
      { empId: '50500011', name: 'Dr.B R Nagaraj', designation: 'PROFESSOR', mobile: '7680945349' },
      { empId: '50500031', name: 'Dr.B.Manjeera', designation: 'Consultant', mobile: '8317656181' },
      { empId: '50400245', name: 'Dr.Abburi Anil Kumar', designation: 'ASSISTANT PROFESSOR', mobile: '7013308006' },
      { empId: '50400273', name: 'Dr.Dasari Ravi Kiran', designation: 'ASSISTANT PROFESSOR', mobile: '7975073669' }
    ]
  },
  {
    department: 'RESPIRATORY MEDICINE',
    doctors: [
      { empId: '50500004', name: 'Dr.V Suryanarayana', designation: 'PROFESSOR', mobile: '9444520524' },
      { empId: '50400224', name: 'Dr.Archana Andhavarapu', designation: 'Associate Professor', mobile: '7729971707' },
      { empId: '50400046', name: 'Dr.G.Venkata Mohan', designation: 'ASSISTANT PROFESSOR', mobile: '9390387908' },
      { empId: '50100120', name: 'Dr.Sreenivasa Rao.K', designation: 'SENIOR RESIDENT', mobile: '9849340700' },
      { empId: '50400264', name: 'Dr.Vadde Vijaya Lakshmi', designation: 'SENIOR RESIDENT', mobile: '9959173555' },
      { empId: '50400274', name: 'Dr.Kolli Kanchana', designation: 'SENIOR RESIDENT', mobile: '8008151990' }
    ]
  },
  {
    department: 'DVL',
    doctors: [
      { empId: '50400242', name: 'Dr.Kiran Kanth', designation: 'Professor', mobile: '9849252860' },
      { empId: '50100170', name: 'Dr.Ch Dilip Chandra', designation: 'ASSO. PROFESSOR', mobile: '9963413470' },
      { empId: '50400235', name: 'Dr.B.Aruna', designation: 'ASSO. PROFESSOR', mobile: '8142853339' },
      { empId: '50400267', name: 'Dr.Dantham Gayathri', designation: 'SENIOR RESIDENT', mobile: '7702136973' },
      { empId: '50400271', name: 'Dr.B.Suseela', designation: 'SENIOR RESIDENT', mobile: '8639876365' }
    ]
  },
  {
    department: 'PSYCHIATRY',
    doctors: [
      { empId: '50100130', name: 'Dr.R V R Abhinaya', designation: 'PROFESSOR', mobile: '8106052157' },
      { empId: '50100159', name: 'Dr.K V M Sailahari', designation: 'ASSO. PROFESSOR', mobile: '8019714709' },
      { empId: '50400170', name: 'Dr.Sathi Vineesha', designation: 'ASST. PROFESSOR', mobile: '7680821886' },
      { empId: '50400230', name: 'Dr.Suvvari Pratima', designation: 'SENIOR RESIDENT', mobile: '7032692593' }
    ]
  },
  {
    department: 'GENERAL SURGERY',
    doctors: [
      { empId: '50400088', name: 'Dr.G.Rajashekara Babu', designation: 'PROFESSOR & HOD', mobile: '9448394354' },
      { empId: '50600010', name: 'Dr.Metta Raja Gopal', designation: 'PROFESSOR', mobile: '9440319405' },
      { empId: '50400156', name: 'Dr.P.Maheswara Rao', designation: 'PROFESSOR', mobile: '9440532103' },
      { empId: '50400025', name: 'Dr.Govinda Raju Chintada', designation: 'ASST. PROFESSOR', mobile: '9393932828' },
      { empId: '50100311', name: 'Dr.G.Sagar Reddy', designation: 'ASST. PROFESSOR', mobile: '9441664221' },
      { empId: '50100694', name: 'Dr.P.Subash Chandra', designation: 'ASST. PROFESSOR', mobile: '8978252790' },
      { empId: '50400216', name: 'Dr.PRASANTH KUMAR MIDDA', designation: 'SENIOR RESIDENT', mobile: '9133203934' },
      { empId: '50400272', name: 'Dr.Konda Anuhya', designation: 'SENIOR RESIDENT', mobile: '7661916677' }
    ]
  },
  {
    department: 'UROLOGY',
    doctors: [
      { empId: '50500071', name: 'Dr.Gopu Rakesh Vamsi', designation: 'CONSULTANT', mobile: '9885466564' }
    ]
  },
  {
    department: 'NEURO SURGERY',
    doctors: [
      { empId: '50500044', name: 'Dr.V.Satish Kumar', designation: 'CONSULTANT', mobile: '8008222342' },
      { empId: '50500064', name: 'Dr.P.Srinivasa Rao', designation: 'CONSULTANT', mobile: '7093349824' }
    ]
  },
  {
    department: 'PLASTIC SURGERY',
    doctors: [
      { empId: '50500002', name: 'Dr.Sanjay Kumar Mohapatra', designation: 'CONSULTANT', mobile: '9491322193' },
      { empId: '50500069', name: 'Dr.Gorakala Giribabu', designation: 'CONSULTANT', mobile: '9000144391' }
    ]
  },
  {
    department: 'SURGICAL ONCOLOGY',
    doctors: [
      { empId: '50500055', name: 'Dr.Bammidi Sandeep', designation: 'CONSULTANT', mobile: '9052221122' }
    ]
  },
  {
    department: 'ENDOCRINE SURGERY',
    doctors: [
      { empId: '50500072', name: 'Dr.Boddukura Sahithi Priya', designation: 'CONSULTANT', mobile: '8106276393' }
    ]
  },
  {
    department: 'SURGICAL GASTROENTEROLOGY',
    doctors: [
      { empId: '50500054', name: 'Dr. Swamy Naidu Rangumudri', designation: 'CONSULTANT', mobile: '7416315791' }
    ]
  },
  {
    department: 'ORTHOPEDICS',
    doctors: [
      { empId: 'D-5360', name: 'Dr.B Uday Kumar', designation: 'PROFESSOR & HOD', mobile: '9848193396' },
      { empId: 'D-5508', name: 'Dr.G.Omkarnath', designation: 'PROFESSOR', mobile: '9395527030' },
      { empId: '50100153', name: 'Dr.Dinesh Kumar T', designation: 'PROFESSOR', mobile: '8978124959' },
      { empId: '50400045', name: 'Dr.Sunil Gottipati', designation: 'ASSO. PROFESSOR', mobile: '9866662367' },
      { empId: '50100198', name: 'Dr.Santoshbabu Miryabbelli', designation: 'ASSO. PROFESSOR', mobile: '9740121051' },
      { empId: '50100367', name: 'Dr.Bandi Gowtham', designation: 'ASSO. PROFESSOR', mobile: '9441378620' },
      { empId: '50100652', name: 'Dr.M.Suresh', designation: 'ASST. PROFESSOR', mobile: '8897027899' },
      { empId: '50400130', name: 'Dr.K.Kishor', designation: 'ASST. PROFESSOR', mobile: '7893488169' },
      { empId: '50400244', name: 'Dr.Bandaru Venkata Hrushikesh', designation: 'SENIOR RESIDENT', mobile: '9573361020' },
      { empId: '50400250', name: 'Dr.S Rajeswara Rao', designation: 'SENIOR RESIDENT', mobile: '8897340748' },
      { empId: '50400260', name: 'Dr.Muddada Prasanth', designation: 'SENIOR RESIDENT', mobile: '7382565771' },
      { empId: '50400263', name: 'Dr.Kuna Hemanth', designation: 'SENIOR RESIDENT', mobile: '8466822993' }
    ]
  },
  {
    department: 'OTO RINO LARYNGOLOGY(ENT)',
    doctors: [
      { empId: '50100148', name: 'Dr.Boni Tata Rao', designation: 'PROFESSOR & HOD', mobile: '9885108267' },
      { empId: '50400189', name: 'Dr.Bhyri Sateesh', designation: 'ASST. PROFESSOR', mobile: '9160908123' },
      { empId: '50400192', name: 'Dr.Surendra Kumar Chowdary', designation: 'ASST. PROFESSOR', mobile: '8249880848' },
      { empId: '50400040', name: 'Dr.Dakkata Suman Reddy', designation: 'ASST. PROFESSOR', mobile: '7989290370' },
      { empId: '50400158', name: 'Dr.S.Susmitha', designation: 'ASST. PROFESSOR', mobile: '8106750519' },
      { empId: '50400268', name: 'Dr.Ommi Anil Kumar', designation: 'SENIOR RESIDENT', mobile: '8985888914' }
    ]
  },
  {
    department: 'OPHTHALMOLOGY',
    doctors: [
      { empId: '50600011', name: 'Dr.I S V S Prasad Rao', designation: 'PROFESSOR & HOD', mobile: '9885261827' },
      { empId: '50100165', name: 'Dr.V Dinesh Kanth', designation: 'ASSO. PROFESSOR', mobile: '8500949101' },
      { empId: '50100152', name: 'Dr.S Lakshmi', designation: 'ASSO. PROFESSOR', mobile: '9493340934' },
      { empId: '50400167', name: 'Dr.Bura Hima Bindu', designation: 'ASSISTANT PROFESSOR', mobile: '9550342056' },
      { empId: '50400145', name: 'Dr.Reddi Bhagya Sree', designation: 'ASSISTANT PROFESSOR', mobile: '8985006887' },
      { empId: '50400168', name: 'Dr.Divya Juttu', designation: 'ASSISTANT PROFESSOR', mobile: '9603211760' },
      { empId: '50400185', name: 'Dr.Shaik Sadik', designation: 'SENIOR RESIDENT', mobile: '6302558317' },
      { empId: '50400231', name: 'Dr.Mandavilli Meher Divya Geetha', designation: 'SENIOR RESIDENT', mobile: '9705157969' }
    ]
  },
  {
    department: 'DENTAL',
    doctors: [
      { empId: '50100572', name: 'Dr.Paromita Roy', designation: 'ASSO. PROFESSOR', mobile: '8722414841' },
      { empId: '50100227', name: 'Dr.B Rama Chandra  Rao', designation: 'ASST. PROFESSOR', mobile: '9951684437' },
      { empId: '50100224', name: 'Dr.Mandula Ramya', designation: 'ASST. PROFESSOR', mobile: '9705161301' },
      { empId: '50400240', name: 'Dr.Vaska Nissy Catherin', designation: 'JR.RESIDENT', mobile: '7661997196' }
    ]
  },
  {
    department: 'OBSTETRICS & GYNAECOLOGY',
    doctors: [
      { empId: '50100228', name: 'Dr.Pandula Revathi', designation: 'PROFESSOR & HOD', mobile: '9963754497' },
      { empId: '50400001', name: 'Dr.R.Aravind', designation: 'PROFESSOR', mobile: '9440156808' },
      { empId: '50400140', name: 'Dr.Tekupudi Manasa', designation: 'ASST. PROFESSOR', mobile: '7382025775' },
      { empId: '50400209', name: 'LAHARI POLLURU', designation: 'ASST. PROFESSOR', mobile: '7032838380' },
      { empId: '50400219', name: 'Dr.Sadhu Sushmitha', designation: 'ASST. PROFESSOR', mobile: '7981172855' },
      { empId: '50400239', name: 'Dr.Gokavarapu Manisha', designation: 'ASST. PROFESSOR', mobile: '8328339215' },
      { empId: '50400222', name: 'Dr.Alekhya Pilli', designation: 'SENIOR RESIDENT', mobile: '7695950272' },
      { empId: '50400253', name: 'Dr.Ramya Debariki', designation: 'SENIOR RESIDENT', mobile: '7032375343' },
      { empId: '50400254', name: 'Dr.Sanapala Devika', designation: 'SENIOR RESIDENT', mobile: '8019264744' },
      { empId: '50400256', name: 'Dr.Kalavala Anusha', designation: 'SENIOR RESIDENT', mobile: '8179250596' }
    ]
  },
  {
    department: 'PAEDIATRICS',
    doctors: [
      { empId: '50100223', name: 'Dr.M Mahesh Kumar', designation: 'PROFESSOR & HOD', mobile: '8190903479' },
      { empId: '50400259', name: 'Dr.Ravikumar Vavilapalli', designation: 'Associate Professor', mobile: '9966912037' },
      { empId: '50400030', name: 'Dr.P.Kishore Kumar', designation: 'ASST. PROFESSOR', mobile: '9790369811' },
      { empId: '50400086', name: 'Dr.K.Lakshmi Sindhu', designation: 'ASST. PROFESSOR', mobile: '7382556249' },
      { empId: '50400073', name: 'Dr.M.Sravana Durga', designation: 'ASST. PROFESSOR', mobile: '9177050778' },
      { empId: '50400246', name: 'Dr.Madina Sowjanya', designation: 'ASST. PROFESSOR', mobile: '8500322779' },
      { empId: '50400247', name: 'Dr.Gynedi Vidhyadari', designation: 'ASST. PROFESSOR', mobile: '7330747717' },
      { empId: '50400249', name: 'Dr.Paidi Sai Abhishek', designation: 'SENIOR RESIDENT', mobile: '9346857624' },
      { empId: '50400257', name: 'Dr.Lanka Gowthami', designation: 'Assistant Professor', mobile: '8790217581' },
      { empId: '50400255', name: 'Dr.Battula Prasanth Kumar', designation: 'Senior Resident', mobile: '7993877054' },
      { empId: '50400258', name: 'Dr.Panga Usharani', designation: 'Senior Resident', mobile: '7780513318' },
      { empId: '50400266', name: 'Dr.Sambangi Harika', designation: 'Senior Resident', mobile: '9704879599' }
    ]
  },
  {
    department: 'ANAESTHESIA',
    doctors: [
      { empId: '50100203', name: 'Dr.Kotla Hemnath Babu', designation: 'PROFESSOR & HOD', mobile: '6309297535' },
      { empId: '50100154', name: 'Dr.Pradeep Kumar Das', designation: 'PROFESSOR', mobile: '8179521942' },
      { empId: '50100173', name: 'Dr.T Jaya Chandra', designation: 'ASSO. PROFESSOR', mobile: '8106175275' },
      { empId: '50400096', name: 'Dr.T.Srija', designation: 'ASST. PROFESSOR', mobile: '8179575812' },
      { empId: '50400178', name: 'Dr.K.Reshma Naidu', designation: 'ASST. PROFESSOR', mobile: '8500172349' },
      { empId: '50400133', name: 'Dr.A.Dileep Kumar', designation: 'ASST. PROFESSOR', mobile: '8106818725' },
      { empId: '50400155', name: 'Dr.Sravanthi Velamala', designation: 'ASST. PROFESSOR', mobile: '7396842303' },
      { empId: '50400227', name: 'Dr.Nimmaka Vedasri', designation: 'ASST. PROFESSOR', mobile: '9347435832' },
      { empId: '50400201', name: 'Dr.Rallapalli Venkatasai Swarna Sahithi', designation: 'ASST. PROFESSOR', mobile: '8985912199' },
      { empId: '50400221', name: 'Dr.Chillara Meena', designation: 'SENIOR RESIDENT', mobile: '9949813502' },
      { empId: '50400269', name: 'Dr.Nimmakayala Preetam', designation: 'SENIOR RESIDENT', mobile: '8328129772' },
      { empId: '50400270', name: 'Dr.Komanuthala Harika', designation: 'SENIOR RESIDENT', mobile: '7981171581' }
    ]
  }
];

const dummyImg = "https://www.w3schools.com/howto/img_avatar.png";

const Doctors = () => {
  return (
    <div className="doctors-container">
  <h1 className="doctors-title">Our Doctors</h1>
  {doctorsData.map((dept) => (
    <div key={dept.department} className="doctors-department">
      <h2 className="doctors-department-title">{dept.department}</h2>
      <div className="doctors-list">
        {dept.doctors.map((doc) => (
          <div key={doc.empId} className="doctor-card">
            <img src={dummyImg} alt="Doctor" className="doctor-img" />
            <div className="doctor-name">{doc.name}</div>
            <div className="doctor-designation">{doc.designation}</div>
            <div className="doctor-id">Emp ID: {doc.empId}</div>
            <div className="doctor-mobile">Mobile: {doc.mobile}</div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
  );
};

export default Doctors;