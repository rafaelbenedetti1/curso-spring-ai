package br.com.rafael.repository

import br.com.rafael.entity.Share
import org.springframework.data.jpa.repository.JpaRepository

interface WalletRepository: JpaRepository<Share, Long> {}