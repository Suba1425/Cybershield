import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import PhishingModule from './pages/PhishingModule';
import PasswordModule from './pages/PasswordModule';
import UrlAnalyzerPage from './pages/UrlAnalyzerPage';
import ScenariosPage from './pages/ScenariosPage';
import QuizPage from './pages/QuizPage';
import TipsPage from './pages/TipsPage';
import LearningPathsPage from './pages/LearningPathsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/phishing" element={<PhishingModule />} />
        <Route path="/passwords" element={<PasswordModule />} />
        <Route path="/url-analyzer" element={<UrlAnalyzerPage />} />
        <Route path="/scenarios" element={<ScenariosPage />} />
        <Route path="/quizzes" element={<QuizPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/learn" element={<LearningPathsPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
