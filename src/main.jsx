import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import ArticlesList from './components/ArticlesList'
import ArticleDetail from './components/ArticleDetail'
import StaticPage from './pages/StaticPage'

function Privacy(){
  return (
    <StaticPage title="Política de Privacidade">
      <p>Respeitamos sua privacidade e tratamos seus dados conforme a LGPD. Coletamos apenas informações necessárias para prestação dos serviços e comunicação.</p>
      <p>Você pode solicitar acesso, correção ou exclusão de dados pelo canal de contato.</p>
    </StaticPage>
  )
}

function Terms(){
  return (
    <StaticPage title="Termos de Uso">
      <p>O portal fornece conteúdo informativo e não substitui consulta médica. Ao utilizar a plataforma, você concorda com estes termos.</p>
    </StaticPage>
  )
}

function LGPD(){
  return (
    <StaticPage title="LGPD">
      <p>Tratamos dados pessoais com base legal apropriada e medidas de segurança. Finalidades: atendimento, agendamento, newsletter e melhorias.</p>
    </StaticPage>
  )
}

function ArticlesPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pt-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold">Artigos</h1>
      </div>
      <ArticlesList />
    </div>
  )
}

function ArticlePage(){
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pt-16" />
      <ArticleDetail />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/lgpd" element={<LGPD />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
