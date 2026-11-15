package com.studiocamilesimas.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * DTO para a futura rota POST /api/contact.
 * Permite receber nome, telefone e mensagem do formulário da landing page.
 */
public record ContactRequestDto(

    @NotBlank(message = "O nome é obrigatório.")
    @Size(min = 2, max = 100, message = "O nome deve ter entre 2 e 100 caracteres.")
    String name,

    @NotBlank(message = "O telefone é obrigatório.")
    @Size(min = 10, max = 20, message = "Telefone inválido.")
    String phone,

    @Size(max = 500, message = "A mensagem não pode ultrapassar 500 caracteres.")
    String message,

    /** Serviço de interesse, ex.: "Unhas", "Cílios" */
    String service
) {}
