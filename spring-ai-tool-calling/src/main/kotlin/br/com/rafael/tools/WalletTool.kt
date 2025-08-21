package br.com.rafael.tools

import br.com.rafael.entity.Share
import br.com.rafael.repository.WalletRepository
import org.springframework.ai.tool.annotation.Tool

class WalletTool(private val repository: WalletRepository) {

    @Tool(description = "Number of shares for each company in my wallet")
    fun getNumberOfShares() : List<Share> {
        return repository.findAll()
    }
}