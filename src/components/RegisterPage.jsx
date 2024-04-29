import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    // Хранение данных формы в локальном состоянии
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showWarning, setShowWarning] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    // изменение в поле ввода
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //  отправка формы
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email.trim() === '' || formData.password.trim() === '') {
            setShowWarning(true); 
            return; 
        }
        if (formData.password.trim().length < 7 || !/[a-z]/.test(formData.password) || !/[A-Z]/.test(formData.password)) {
            setPasswordError('Пароль должен содержать минимум 7 символов, включая заглавные и строчные буквы.');
            return; // Прерываем выполнение функции
        }

        console.log('Отправленные данные:', formData);
        navigate('/login');
    };

    return (
        <div>
            <header>
                <div className="header">
                    <Link to="/main" className="logo">
                        Краснокнижные животные
                    </Link>
                    <Link to="/about" className="nav-li">
                        О нас
                    </Link>
                    <Link to="/favourites" className="nav-li">
                        Избранное
                    </Link>
                    <ul className="nav">
                        <li>
                            <Link to="/login" className="nav-li">
                               Авторизация
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

            <div className="register-container">
                <h2>Регистрация</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="reg_but">Зарегистрироваться</button>
                    {/*  предупреждение, если поля не заполнены */}
                    {showWarning && <p style={{ color: 'red' }}>Пожалуйста, заполните все поля!</p>}
                    {/*  сообщение об ошибке валидации пароля */}
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    <p>
                        Уже есть аккаунт? <Link to="/login">Войти</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
