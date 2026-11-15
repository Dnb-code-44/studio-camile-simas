package com.studiocamilesimas.api.service;

import com.studiocamilesimas.api.dto.ContactRequestDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * Serviço responsável por processar solicitações de contato/agendamento.
 *
 * Na v1 apenas registra o lead em log.
 * Futuras integrações sugeridas:
 *   - Envio de e-mail via JavaMailSender / SendGrid
 *   - Notificação via WhatsApp Business API (Twilio / Meta Cloud API)
 *   - Persistência em banco de dados (Spring Data JPA + PostgreSQL)
 */
@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    @Value("${app.whatsapp.number}")
    private String whatsappNumber;

    /**
     * Processa um novo lead de contato.
     *
     * @param dto dados enviados pelo visitante
     * @return URL de redirecionamento para o WhatsApp (uso futuro)
     */
    public String processContact(ContactRequestDto dto) {
        log.info("Novo lead recebido — nome: {}, telefone: {}, serviço: {}",
                dto.name(), dto.phone(), dto.service());

        // TODO: persistir lead no banco de dados
        // TODO: enviar notificação por e-mail / WhatsApp Business API

        String message = buildWhatsAppMessage(dto);
        return "https://wa.me/" + whatsappNumber + "?text=" + message;
    }

    private String buildWhatsAppMessage(ContactRequestDto dto) {
        String raw = String.format(
            "Olá! Meu nome é %s, telefone %s. Tenho interesse em: %s. %s",
            dto.name(),
            dto.phone(),
            dto.service() != null ? dto.service() : "informações gerais",
            dto.message() != null ? dto.message() : ""
        ).trim();
        return java.net.URLEncoder.encode(raw, java.nio.charset.StandardCharsets.UTF_8);
    }
}
