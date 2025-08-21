package br.com.rafael.api

data class DailyShareQuote(
    val company: String,
    val price: Float,
    val datetime: String
)
