"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function NotFound() {
  const [currentYear, setCurrentYear] = useState("")

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <>
      {/* FUNDO EMBASADO */}
      <div className="bg" aria-hidden="true"></div>
      <div className="vignette" aria-hidden="true"></div>

      {/* FITAS DE SEGURANÇA */}
      <div className="tapes" aria-hidden="true">
        <div className="tape t1">
          <div className="marquee" aria-hidden="true">
            <span className="label">ÁREA RESTRITA — ACESSO NEGADO</span>
            <span className="label">ÁREA RESTRITA — ACESSO NEGADO</span>
            <span className="label">ÁREA RESTRITA — ACESSO NEGADO</span>
            <span className="label">ÁREA RESTRITA — ACESSO NEGADO</span>
          </div>
          <div className="marquee" aria-hidden="true" aria-label="">
            <span className="label">ÁREA RESTRITA — ACESSO NEGADO</span>
            <span className="label">ÁREA RESTRITA — ACESSO NEGADO</span>
            <span className="label">ÁREA RESTRITA — ACESSO NEGADO</span>
            <span className="label">ÁREA RESTRITA — ACESSO NEGADO</span>
          </div>
        </div>

        <div className="tape t2">
          <div className="marquee">
            <span className="label">ERRO 404 — MULTIVERSO ESTÚDIO</span>
            <span className="label">ERRO 404 — MULTIVERSO ESTÚDIO</span>
            <span className="label">ERRO 404 — MULTIVERSO ESTÚDIO</span>
            <span className="label">ERRO 404 — MULTIVERSO ESTÚDIO</span>
          </div>
          <div className="marquee">
            <span className="label">ERRO 404 — MULTIVERSO ESTÚDIO</span>
            <span className="label">ERRO 404 — MULTIVERSO ESTÚDIO</span>
            <span className="label">ERRO 404 — MULTIVERSO ESTÚDIO</span>
            <span className="label">ERRO 404 — MULTIVERSO ESTÚDIO</span>
          </div>
        </div>

        <div className="tape t3">
          <div className="marquee">
            <span className="label">PÁGINA NÃO ENCONTRADA — MULTIVERSO</span>
            <span className="label">PÁGINA NÃO ENCONTRADA — MULTIVERSO</span>
            <span className="label">PÁGINA NÃO ENCONTRADA — MULTIVERSO</span>
            <span className="label">PÁGINA NÃO ENCONTRADA — MULTIVERSO</span>
          </div>
          <div className="marquee">
            <span className="label">PÁGINA NÃO ENCONTRADA — MULTIVERSO</span>
            <span className="label">PÁGINA NÃO ENCONTRADA — MULTIVERSO</span>
            <span className="label">PÁGINA NÃO ENCONTRADA — MULTIVERSO</span>
            <span className="label">PÁGINA NÃO ENCONTRADA — MULTIVERSO</span>
          </div>
        </div>
      </div>

      {/* VIDRO FRONTAL COM MENSAGEM DE ERRO */}
      <main className="glass-wrap" role="main">
        <section
          className="glass"
          aria-live="polite"
          style={{
            backdropFilter: "blur(18px) saturate(1.1)",
            WebkitBackdropFilter: "blur(18px) saturate(1.1)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="brand" aria-label="Marca">
            <div className="dot" aria-hidden="true"></div>
            <h1>Multiverso Estúdio</h1>
          </div>

          <h2 className="headline">Ops! Esta dimensão não existe.</h2>
          <p className="sub">
            Parece que você tentou acessar uma área do multiverso que ainda não foi criada. Que tal voltar ao portal
            principal?
          </p>

          <span className="badge" aria-hidden="true">
            Erro 404 - Página não encontrada
          </span>

          <div className="cta">
            <Link className="btn" href="/" aria-label="Voltar ao início">
              Voltar ao Portal
            </Link>
            <a
              className="btn"
              href="https://www.instagram.com/multiversoestudio"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visitar Instagram"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>

      <footer>
        <small>© {currentYear} Multiverso Estúdio • Uma jornada exploratória simbiótica</small>
      </footer>
    </>
  )
}
