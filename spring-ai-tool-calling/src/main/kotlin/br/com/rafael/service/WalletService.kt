package br.com.rafael.service

import br.com.rafael.api.WalletResponse
import br.com.rafael.repository.WalletRepository
import org.springframework.stereotype.Service
import java.util.function.Supplier

@Service
class WalletService(private val walletRepository: WalletRepository) : Supplier<WalletResponse>{

    override fun get(): WalletResponse {
        return WalletResponse(walletRepository.findAll())
    }
}