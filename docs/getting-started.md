# Getting Started with FHIR Healthcare API

## Overview

HL7 FHIR-compliant healthcare API with patient records and interoperability

## Prerequisites

- Node.js 20+
- npm
- Docker (optional)
- PostgreSQL
- Redis

## Installation

1. Clone the repository:
```bash
git clone https://github.com/offlabel-scaffolds/fhir-compliant-api
cd fhir-compliant-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run database migrations:
```bash
npm run migrate
```

5. Start the development server:
```bash
npm run dev
```

## Next Steps

- Read the [API Documentation](./api-reference.md)
- Review [Security Best Practices](./security.md)
- Deploy to production using the [Deployment Guide](./deployment.md)

## Support

For questions or issues:
- Email: hello@offlabel.design
- GitHub: https://github.com/offlabel-scaffolds/fhir-compliant-api/issues
