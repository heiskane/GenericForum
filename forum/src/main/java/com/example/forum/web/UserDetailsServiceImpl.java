package com.example.forum.web;

import com.example.forum.domain.User;
import com.example.forum.domain.UserRepository;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) { this.userRepository = userRepository; }

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {

        User currentUser = userRepository.findByName(name);
        System.out.println(currentUser.toString());
        UserDetails user = new org.springframework.security.core.userdetails.User(name, currentUser.getPassword(),
                AuthorityUtils.createAuthorityList(currentUser.getRole()));
        return user;

    }

}
