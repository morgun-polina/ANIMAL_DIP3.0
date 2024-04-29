import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showWarning, setShowWarning] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // попытки изменить
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // попытки отправить
    const handleLogin = (e) => {
        e.preventDefault();

        // езаполнен
        if (formData.email.trim() === '' || formData.password.trim() === '') {
            setShowWarning(true);
            return;
        }

        if (formData.password.trim().length < 7 || !/[a-z]/.test(formData.password) || !/[A-Z]/.test(formData.password)) {
            setPasswordError('Пароль должен содержать минимум 7 символов, включая заглавные и строчные буквы.');
            return;
        }
        console.log('Отправленные данные:', formData);
        localStorage.setItem('userEmail', formData.email);
        
        setIsLoggedIn(true);
        navigate('/main');
    }

    // выхода нет
    const handleLogout = () => {
        setIsLoggedIn(false);
        setFormData({ email: '', password: '' });
        localStorage.removeItem('userEmail'); // Удаляем email из локального хранилища при выходе
        navigate('/main');
    }

    // Получаем email из локального хранилища при загрузке страницы
    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setFormData(prevState => ({
                ...prevState,
                email: storedEmail
            }));
        }
    }, []);

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
                            {isLoggedIn ? (
                                <>
                                    <span className="nav-li">Кабинет пользователя</span>
                                    <button onClick={handleLogout}>Выход</button>
                                </>
                            ) : (
                                <Link to="/login" className="nav-li">
                                    Авторизация
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </header>
            <div className="login-container">
                <h2>Вход</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <button type="submit" className="login_but">Войти</button>
                    <p>
                        Или <Link to="/register">зарегистрируйтесь</Link>
                    </p>
                    {showWarning && <p style={{ color: 'red' }}>Пожалуйста, заполните все поля!</p>}
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
