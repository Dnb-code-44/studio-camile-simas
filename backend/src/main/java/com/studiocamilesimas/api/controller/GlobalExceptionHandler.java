package com.studiocamilesimas.api.controller;

import com.studiocamilesimas.api.dto.ApiResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.stream.Collectors;

/**
 * Tratamento centralizado de erros da API.
 * Garante que respostas de erro sigam o mesmo envelope ApiResponseDto.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /** Erros de validação de DTO (@Valid) */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponseDto<Void>> handleValidation(
            MethodArgumentNotValidException ex) {

        String errors = ex.getBindingResult()
                          .getFieldErrors()
                          .stream()
                          .map(e -> e.getField() + ": " + e.getDefaultMessage())
                          .collect(Collectors.joining("; "));

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(ApiResponseDto.error(errors));
    }

    /** Erros genéricos não tratados */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponseDto<Void>> handleGeneric(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ApiResponseDto.error("Ocorreu um erro interno. Tente novamente mais tarde."));
    }
}
