/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mandir.bapsnagpur.config;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 *
 * @author hp2
 */
@Configuration
public class GeneralConfiguration {
    @Bean
    public DateFormat ProjectDetailDateFormat() {
        return new SimpleDateFormat("dd-MM-yyyy");
    }
}
