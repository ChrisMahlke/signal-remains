# Signal Remains

A simple web application with CI/CD pipeline deployed on Google Cloud Platform. Test

## 🚀 Deployment

This application is automatically deployed to GCP Cloud Run when changes are pushed to the `master` branch.

- **Production URL**: https://signal-remains-xxxxx-uc.a.run.app
- **Custom Domain**: https://chrismahlke.io

## 🔄 CI/CD Pipeline

The deployment pipeline is configured in `.github/workflows/deploy.yml` and follows this workflow:

1. **Development**: Work on the `develop` branch
2. **Testing**: Create pull requests from `develop` to `master`
3. **Deployment**: Merging to `master` triggers automatic deployment to GCP

## 🛠️ Local Development

To run this application locally:

```bash
# Using Docker
docker build -t signal-remains .
docker run -p 8080:80 signal-remains

# Using Python (simple HTTP server)
python -m http.server 8080
```

## 📁 Project Structure

```
signal-remains/
├── index.html          # Main web application
├── Dockerfile          # Container configuration
├── .github/workflows/  # CI/CD pipeline
└── README.md          # This file
```

## 🔧 GCP Configuration

- **Project ID**: helpful-quanta-463702-a3
- **Service**: Cloud Run
- **Region**: us-central1
- **Memory**: 512Mi
- **CPU**: 1

## 🔐 Required Secrets

The following GitHub secrets need to be configured:

- `GCP_SA_KEY`: Service account JSON key for GCP authentication