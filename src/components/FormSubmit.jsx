import { useState } from 'react';

function FormSubmit() {
    // State for form fields
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });
    
    // State for form submission status
    const [submitStatus, setSubmitStatus] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        
        // Validation
        if (!formData.username || !formData.email || !formData.message) {
            setSubmitStatus('Please fill in all fields');
            return;
        }

        // Here you would typically make an API call
        // For this example, we'll just show the submitted data
        setSubmitStatus('Form submitted successfully!');
        console.log('Submitted data:', formData);

        // Clear form after submission
        setFormData({
            username: '',
            email: '',
            message: ''
        });
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <h2>Contact Form</h2>
            
            {/* Show submission status */}
            {submitStatus && (
                <div style={{ 
                    padding: '10px', 
                    marginBottom: '10px',
                    backgroundColor: submitStatus.includes('success') ? '#d4edda' : '#f8d7da'
                }}>
                    {submitStatus}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{ 
                            width: '100%',
                            padding: '8px',
                            marginTop: '5px'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ 
                            width: '100%',
                            padding: '8px',
                            marginTop: '5px'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ 
                            width: '100%',
                            padding: '8px',
                            marginTop: '5px',
                            height: '100px'
                        }}
                    />
                </div>

                <button 
                    type="submit"
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormSubmit;
