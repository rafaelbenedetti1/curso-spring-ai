package br.com.rafael.config

import br.com.rafael.api.StockRequest
import br.com.rafael.api.StockResponse
import br.com.rafael.api.WalletResponse
import br.com.rafael.repository.WalletRepository
import br.com.rafael.service.StockService
import br.com.rafael.service.WalletService
import br.com.rafael.tools.StockTool
import br.com.rafael.tools.WalletTool
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Description
import org.springframework.web.client.RestTemplate
import java.util.function.Function
import java.util.function.Supplier

@Configuration
class WalletConfig {

    @Bean
    fun restTemplate(): RestTemplate = RestTemplate()

    @Bean
    @Description("Number of shares for each company in my portfolio")
    fun numberOfShares(walletRepository: WalletRepository): Supplier<WalletResponse> = WalletService(walletRepository)

    @Bean
    @Description("Latest stock prices")
    fun latestStockPrices(): Function<StockRequest, StockResponse> = StockService(restTemplate())

    @Bean
    fun walletTools(repository: WalletRepository): WalletTool = WalletTool(repository)

    @Bean
    fun stockTools(): StockTool = StockTool(restTemplate())

}