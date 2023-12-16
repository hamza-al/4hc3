// pages/resume-form.js
import { useState } from 'react';
import Resume from './resume';
import './App.css';

const ResumeForm = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '', // Added age
    location: '', // Added location
  });

  const [experienceFields, setExperienceFields] = useState([
    { company: '', position: '', startDate: '', endDate: '', description: '' },
  ]);

  const [educationFields, setEducationFields] = useState([
    { institution: '', degree: '', graduationDate: '' },
  ]);

  const [skills, setSkills] = useState('');

  const [submittedData, setSubmittedData] = useState(null);

  const handleAddField = (fieldType) => {
    if (fieldType === 'experience') {
      setExperienceFields([
        ...experienceFields,
        { company: '', position: '', startDate: '', endDate: '', description: '' },
      ]);
    } else if (fieldType === 'education') {
      setEducationFields([...educationFields, { institution: '', degree: '', graduationDate: '' }]);
    }
  };

  const handleChangeField = (index, key, value, fieldType) => {
    if (fieldType === 'experience') {
      const newFields = [...experienceFields];
      newFields[index][key] = value;
      setExperienceFields(newFields);
    } else if (fieldType === 'education') {
      const newFields = [...educationFields];
      newFields[index][key] = value;
      setEducationFields(newFields);
    }
  };

  const handlePersonalInfoChange = (key, value) => {
    setPersonalInfo({ ...personalInfo, [key]: value });
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      personalInfo,
      experience: experienceFields.map(({ company, position, startDate, endDate, description }) => ({
        company,
        position,
        startDate,
        endDate,
        description,
      })),
      education: educationFields.map(({ institution, degree, graduationDate }) => ({
        institution,
        degree,
        graduationDate,
      })),
      skills,
    };
    setSubmittedData(formData);
  };

  return (
    <div className="resPage" style={{ display: 'flex', overflowY: 'auto', justifyContent: 'space-around', maxWidth: '1400px', marginBottom: '40px', margin: 'auto' }}>
      <div style={{ width: '45%' }}>
        <h1 style={{ textAlign: 'center' }}>Resume Form</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div style={{ marginBottom: '40px' }}>
            <label>First Name:</label>
            <input
              type="text"
              placeholder='ex. John'
              value={personalInfo.firstName}
              onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Last Name:</label>
            <input
              type="text"
              placeholder='ex. Doe'
              value={personalInfo.lastName}
              onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Email:</label>
            <input
              type="email"
              placeholder='ex. me@gmail.com'
              value={personalInfo.email}
              onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Phone Number:</label>
            <input
              type="tel"
              placeholder='ex. 123-456-7890'
              value={personalInfo.phoneNumber}
              onChange={(e) => handlePersonalInfoChange('phoneNumber', e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Age:</label>
            <input
              type="text"
              placeholder='ex. 99'
              value={personalInfo.age}
              onChange={(e) => handlePersonalInfoChange('age', e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Location:</label>
            <input
              type="text"
              placeholder='ex. Hamilton'
              value={personalInfo.location}
              onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
            <h1>We're gonna ask for your experience now!</h1>
          <h2>Experience</h2>
          {experienceFields.map((field, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <label>Company:</label>
              <input
                type="text"
                value={field.company}
                onChange={(e) => handleChangeField(index, 'company', e.target.value, 'experience')}
                style={{ width: '100%' }}
              />
              <label>Position:</label>
              <input
                type="text"
                value={field.position}
                onChange={(e) => handleChangeField(index, 'position', e.target.value, 'experience')}
                style={{ width: '100%' }}
              />
              <label>Start Date:</label>
              <input
                type="text"
                value={field.startDate}
                onChange={(e) => handleChangeField(index, 'startDate', e.target.value, 'experience')}
                style={{ width: '100%' }}
              />
              <label>End Date:</label>
              <input
                type="text"
                value={field.endDate}
                onChange={(e) => handleChangeField(index, 'endDate', e.target.value, 'experience')}
                style={{ width: '100%' }}
              />
              <label>Description:</label>
              <textarea
              placeholder='Tell us about what you accomplished here!'
                value={field.description}
                onChange={(e) => handleChangeField(index, 'description', e.target.value, 'experience')}
                style={{ width: '100%', minHeight: '50px' }}
              />
            </div>
          ))}
          <button type="button" onClick={() => handleAddField('experience')} style={{ marginRight: '10px' }}>
            Add Experience
          </button>

          <h2>Education</h2>
          {educationFields.map((field, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <label>Institution:</label>
              <input
                type="text"
                value={field.institution}
                onChange={(e) => handleChangeField(index, 'institution', e.target.value, 'education')}
                style={{ width: '100%' }}
              />
              <label>Degree:</label>
              <input
                type="text"
                value={field.degree}
                onChange={(e) => handleChangeField(index, 'degree', e.target.value, 'education')}
                style={{ width: '100%' }}
              />
              <label>Graduation Date:</label>
              <input
                type="text"
                value={field.graduationDate}
                onChange={(e) => handleChangeField(index, 'graduationDate', e.target.value, 'education')}
                style={{ width: '100%' }}
              />
            </div>
          ))}
          <button type="button" onClick={() => handleAddField('education')} style={{ marginRight: '10px' }}>
            Add Education
          </button>

          <h2>Skills</h2>
          <div style={{ marginBottom: '20px' }}>
            <label>Skills:</label>
            <textarea
              value={skills}
              onChange={handleSkillsChange}
              style={{ width: '100%', minHeight: '50px' }}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div style={{ width: '45%' }}>
        {submittedData && (
          <div style={{ marginTop: '20px' }}>
            <Resume data={submittedData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeForm;
