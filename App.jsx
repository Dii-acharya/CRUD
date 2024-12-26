import React, { useState, useEffect } from 'react';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        state: '',
        district: '',
        dob: '',
        language: '',
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            fetchData(); // Refresh the table data
        }
    };

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/api/users');
        const result = await response.json();
        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '800px',
            margin: 'auto',
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        title: {
            textAlign: 'center',
            color: '#333',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        input: {
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        select: {
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        radioGroup: {
            margin: '10px 0',
        },
        button: {
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
        },
        th: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '8px',
            textAlign: 'left',
        },
        td: {
            border: '1px solid #ddd',
            padding: '8px',
        },
        actionButton: {
            padding: '5px 10px',
            fontSize: '14px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '5px',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>User Form</h1>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input style={styles.input} type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input style={styles.input} type="text" name="address" placeholder="Address" onChange={handleChange} />
                <select style={styles.select} name="state" onChange={handleChange}>
                    <option value="">Select State</option>
                    <option value="State1">karnataka</option>
                    <option value="State2">kerala</option>
                    <option value="State3">tamilnadu</option>
                    <option value="State4">mumbai</option>
                    <option value="State5">delhi</option>
                </select>
                <input style={styles.input} type="date" name="dob" onChange={handleChange} />
                <div style={styles.radioGroup}>
                    <label><input type="radio" name="language" value="Kannada" onChange={handleChange} /> Kannada</label>
                    <label><input type="radio" name="language" value="Hindi" onChange={handleChange} /> Hindi</label>
                    <label><input type="radio" name="language" value="English" onChange={handleChange} /> English</label>
                </div>
                <button style={styles.button} type="submit">Submit</button>
            </form>

            <h2 style={styles.title}>Saved Data</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Address</th>
                        <th style={styles.th}>State</th>
                        <th style={styles.th}>District</th>
                        <th style={styles.th}>Date of Birth</th>
                        <th style={styles.th}>Language</th>
                        <th style={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td style={styles.td}>{item.name}</td>
                            <td style={styles.td}>{item.address}</td>
                            <td style={styles.td}>{item.state}</td>
                            <td style={styles.td}>{item.district}</td>
                            <td style={styles.td}>{item.dob}</td>
                            <td style={styles.td}>{item.language}</td>
                            <td style={styles.td}>
                                <button style={styles.actionButton}>Edit</button>
                                <button style={styles.actionButton}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
/* i am currently experiencing difficulties with downloading the necessary package for my assignment submission.Despite multiple attempts,i have encountered issues that are preventing me from completing the task */