/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mandir.bapsnagpur.config;

import java.io.IOException;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

/**
 *
 * @author hp2
 */
@Configuration
@ComponentScan(basePackages = "com.mandir.bapsnagpur")
public class BapsnagpurConfiguration {

    @Bean
    public static PropertyPlaceholderConfigurer getPropertyPlaceholderConfigurer() throws IOException {
        PropertyPlaceholderConfigurer ppc = new PropertyPlaceholderConfigurer();
        ResourceLoader resourceLoader = new PathMatchingResourcePatternResolver();
        ppc.setLocations(
                resourceLoader.getResource(System.getProperty("BAPSNAGPUR_CONFIGURATION_FILE")));
        return ppc;
    }

//    @Bean
//    public static RoleHierarchy roleHierarchy() {
//
//        String roleHierarchyStringRepresentation
//                = UserType.UT_SUPER_ADMIN + " > " + UserType.UT_ROLE_ADMIN + "\n"
//                + UserType.UT_ROLE_ADMIN + " > " + UserType.UT_BANK + "\n"
//                + UserType.UT_BANK + " > " + UserType.UT_DEALER + "\n"
//                + UserType.UT_DEALER + " > " + UserType.UT_AGENT;
//
//        //logger.info("Registered Role Hierarchy: \n{}", roleHierarchyStringRepresentation);
//        RoleHierarchyImpl roleHierarchy = new RoleHierarchyImpl();
//        roleHierarchy.setHierarchy(roleHierarchyStringRepresentation);
//        return roleHierarchy;
//    }
}
