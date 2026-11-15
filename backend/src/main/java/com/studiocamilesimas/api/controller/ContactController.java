package com.studiocamilesimas.api.controller;

import com.studiocamilesimas.api.dto.ApiResponseDto;
import com.studiocamilesimas.api.dto.ContactRequestDto;
import com.studiocamilesimas.api.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Endpoints de contato / agendamento.
 *
 * POST /api/contact  — recebe lead do formulário da landing page
 * GET  /api/health   — health-check rápido (além do Actuator)
 */
@RestController
@RequestMapping("/api")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    /**
     * Recebe os dados do visitante e processa o lead.
     * Retorna a URL do WhatsApp para redirecionamento opcional.
     */
    @PostMapping("/contact")
    public ResponseEntity<ApiResponseDto<String>> contact(
            @Valid @RequestBody ContactRequestDto dto) {

        String whatsappUrl = contactService.processContact(dto);
        return ResponseEntity.ok(
            ApiResponseDto.ok("Lead recebido com sucesso.", whatsappUrl)
        );
    }

    /** Health-check simples para monitoramento externo. */
    @GetMapping("/health")
    public ResponseEntity<ApiResponseDto<Void>> health() {
        return ResponseEntity.ok(ApiResponseDto.ok("API online."));
    }
}
