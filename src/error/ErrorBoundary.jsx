import { Component } from "react";
import { Container, Typography, Box } from "@mui/material";
import { RedRoundedButton } from "@styles/index";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    animation: `${fadeIn} 1s ease-in-out`,
  },
  box: {
    backgroundColor: "#f5f5f5",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    animation: `${fadeIn} 1s ease-in-out 0.3s both`,
  },
  typography: {
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#ff7875",
    },
  },
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("An error occurred:", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleNavigate = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm" sx={styles.container}>
          <Box sx={styles.box}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={styles.typography}
            >
              로그인이 필요한 서비스입니다.
            </Typography>
            <RedRoundedButton onClick={this.handleNavigate} sx={styles.button}>
              홈으로 이동
            </RedRoundedButton>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
