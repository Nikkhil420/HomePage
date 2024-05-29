import React, { useState } from 'react';
import './CreateOrganization.css';

function CreateOrganization() {
  const [organizationName, setOrganizationName] = useState('');

  const handleInputChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Organization Name:', organizationName);
  };

  return (
    <div className="create-organization">
      <h3>Create Organization</h3>
      <form onSubmit={handleSubmit}>
        <h3 id="organizationName1">Enter Your Organization Name *</h3>
        <input
          type="text"
          id="organizationName"
          value={organizationName}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn">Create Organization</button>
      </form>
    </div>
  );
}

export default CreateOrganization;