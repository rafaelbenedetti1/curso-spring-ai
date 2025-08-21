package br.com.rafael.api.twelvedata

import com.fasterxml.jackson.annotation.JsonProperty

data class StockData(
    @JsonProperty("values")
    val values: List<DailyStockData>
)
