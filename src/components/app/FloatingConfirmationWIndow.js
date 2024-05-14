import React, { useState, useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet, Dimensions } from "react-native";

const FloatingWindow = ({ status, incrementToShow }) => {
    const translateY = useRef(new Animated.Value(Dimensions.get('window').height+100)).current; // Initial position off the screen

    const showWindow = () => {
        Animated.timing(translateY, {
            toValue: Dimensions.get("window").height - 70,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setTimeout(hideWindow, 4000); // Auto-hide after 3 seconds
    };

    const hideWindow = () => {
        Animated.timing(translateY, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        console.log("Running inside use effect");
        showWindow(); // Show the window when the component mounts
    }, [incrementToShow]); // Empty dependency array to ensure this effect runs only once

    const styles = StyleSheet.create({
        container: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: status ? "#006400" : "#ff4d4d",
            padding: 10,
        },
        msg: {
            color: "#fff", // White text color
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
        },
    });

    return (
        <Animated.View
            style={[styles.container, { transform: [{ translateY }] }]}
        >
            <Text style={styles.msg}>{status ? "Sucesso" : "Falha"}</Text>
        </Animated.View>
    );
};

export default FloatingWindow;
