package com.studiocamilesimas.api.dto;

/**
 * Envelope genérico para respostas da API.
 *
 * @param success indica se a operação foi bem-sucedida
 * @param message mensagem legível ao usuário
 * @param data    payload opcional (pode ser null)
 */
public record ApiResponseDto<T>(
    boolean success,
    String message,
    T data
) {
    /** Fábrica para resposta de sucesso sem payload. */
    public static <T> ApiResponseDto<T> ok(String message) {
        return new ApiResponseDto<>(true, message, null);
    }

    /** Fábrica para resposta de sucesso com payload. */
    public static <T> ApiResponseDto<T> ok(String message, T data) {
        return new ApiResponseDto<>(true, message, data);
    }

    /** Fábrica para resposta de erro. */
    public static <T> ApiResponseDto<T> error(String message) {
        return new ApiResponseDto<>(false, message, null);
    }
}
