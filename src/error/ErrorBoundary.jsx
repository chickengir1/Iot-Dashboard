import { Component } from "react";
import { Container, Typography, Box } from "@mui/material";
import { RedRoundedButton } from "@styles/index";

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
        <Container
          maxWidth="sm"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              로그인이 필요한 서비스입니다.
            </Typography>
            <RedRoundedButton onClick={this.handleNavigate}>
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
