"use client"

import { useEffect, useState } from "react"

export default function HomePage() {
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
            <span className="label">MULTIVERSO ESTÚDIO — ACESSO RESTRITO</span>
            <span className="label">MULTIVERSO ESTÚDIO — ACESSO RESTRITO</span>
            <span className="label">MULTIVERSO ESTÚDIO — ACESSO RESTRITO</span>
            <span className="label">MULTIVERSO ESTÚDIO — ACESSO RESTRITO</span>
          </div>
          <div className="marquee" aria-hidden="true" aria-label="">
            <span className="label">MULTIVERSO ESTÚDIO — ACESSO RESTRITO</span>
            <span className="label">MULTIVERSO ESTÚDIO — ACESSO RESTRITO</span>
            <span className="label">MULTIVERSO ESTÚDIO — ACESSO RESTRITO</span>
            <span className="label">MULTIVERSO ESTÚDIO — ACESSO RESTRITO</span>
          </div>
        </div>

        <div className="tape t2">
          <div className="marquee">
            <span className="label">NÃO ULTRAPASSE — MULTIVERSO ESTÚDIO</span>
            <span className="label">NÃO ULTRAPASSE — MULTIVERSO ESTÚDIO</span>
            <span className="label">NÃO ULTRAPASSE — MULTIVERSO ESTÚDIO</span>
            <span className="label">NÃO ULTRAPASSE — MULTIVERSO ESTÚDIO</span>
          </div>
          <div className="marquee">
            <span className="label">NÃO ULTRAPASSE — MULTIVERSO ESTÚDIO</span>
            <span className="label">NÃO ULTRAPASSE — MULTIVERSO ESTÚDIO</span>
            <span className="label">NÃO ULTRAPASSE — MULTIVERSO ESTÚDIO</span>
            <span className="label">NÃO ULTRAPASSE — MULTIVERSO ESTÚDIO</span>
          </div>
        </div>

        <div className="tape t3">
          <div className="marquee">
            <span className="label">ÁREA ISOLADA — MULTIVERSO ESTÚDIO</span>
            <span className="label">ÁREA ISOLADA — MULTIVERSO ESTÚDIO</span>
            <span className="label">ÁREA ISOLADA — MULTIVERSO ESTÚDIO</span>
            <span className="label">ÁREA ISOLADA — MULTIVERSO ESTÚDIO</span>
          </div>
          <div className="marquee">
            <span className="label">ÁREA ISOLADA — MULTIVERSO ESTÚDIO</span>
            <span className="label">ÁREA ISOLADA — MULTIVERSO ESTÚDIO</span>
            <span className="label">ÁREA ISOLADA — MULTIVERSO ESTÚDIO</span>
            <span className="label">ÁREA ISOLADA — MULTIVERSO ESTÚDIO</span>
          </div>
        </div>
      </div>

      {/* VIDRO FRONTAL COM MENSAGEM */}
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

          <h2 className="headline">Muito obrigado por aguardar as novidades.</h2>
          <p className="sub">Estamos quase para abrir o portal para o Multiverso. Aguarde mais um pouco.</p>

          <span className="badge" aria-hidden="true">
            Portal em construção
          </span>

          <div className="cta">
            <a className="btn" href="mailto:contato@multiversoestudio.com.br" aria-label="Contato por e-mail">
              Fale com a gente
            </a>
            <a
              className="btn"
              href="https://www.instagram.com/multiversoestudio"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visitar Instagram"
            >
              Instagram
            </a>
            <a
              className="btn"
              href="https://wa.me/5511979875590"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Contato via WhatsApp"
            >
              WhatsApp
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
