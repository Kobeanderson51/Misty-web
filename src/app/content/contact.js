import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';  // Importing icons from react-icons
import './contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add logic to handle form submission here, like sending the form data to an email or API.
        console.log(formData);
        
        // Clear the form fields by resetting formData state
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <div className='contact-section'>
            <h3 className='contact-title'>Contact Me</h3>
            
            <div className='contact-container'>
                {/* Contact Form */}
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            type='text'
                            id='lastName'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone</label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit' className='submit-button'>
                        Send Message
                    </button>
                </form>

                {/* Personal Information Section with Icons */}
                <div className='personal-info'>
                    <h4>Contact Information</h4>
                    <ul>
                        <li><FaPhoneAlt /> (801) 230-2878</li>
                        <li><FaEnvelope /> mistydbirch@gmail.com</li>
                        <li><FaLinkedin /><a href='https://linkedin.com/in/your-profile' target='_blank' rel='noopener noreferrer'>linkedin.com/in/your-profile</a></li>
                        <li><FaMapMarkerAlt />Hurricane, UT</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
