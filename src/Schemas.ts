export const schemas = {
  base: {
    schema: {
      name: "base",
      type: "object",
      properties: {
        firstName: { type: "string", title: "Prénom" },
        lastName: { type: "string", title: "Nom" },
        age: { type: "integer", title: "Âge" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        { type: "Control", scope: "#/properties/firstName" },
        { type: "Control", scope: "#/properties/lastName" },
        { type: "Control", scope: "#/properties/age" },
      ],
    },
  },

  contact: {
    schema: {
      name: "contact",
      type: "object",
      properties: {
        email: { type: "string", format: "email", title: "Email" },
        phone: { type: "string", title: "Téléphone" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        { type: "Control", scope: "#/properties/email" },
        { type: "Control", scope: "#/properties/phone" },
      ],
    },
  },

  address: {
    schema: {
      name: "address",
      type: "object",
      properties: {
        street: { type: "string", title: "Rue" },
        city: { type: "string", title: "Ville" },
        zip: { type: "string", title: "Code Postal" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        { type: "Control", scope: "#/properties/street" },
        { type: "Control", scope: "#/properties/city" },
        { type: "Control", scope: "#/properties/zip" },
      ],
    },
  },

  education: {
    schema: {
      name: "education",
      type: "object",
      properties: {
        diploma: { type: "string", title: "Diplôme" },
        year: { type: "integer", title: "Année d’obtention" },
        institution: { type: "string", title: "Établissement" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        { type: "Control", scope: "#/properties/diploma" },
        { type: "Control", scope: "#/properties/year" },
        { type: "Control", scope: "#/properties/institution" },
      ],
    },
  },

  experience: {
    schema: {
      name: "experience",
      type: "object",
      properties: {
        company: { type: "string", title: "Nom de l’entreprise" },
        jobTitle: { type: "string", title: "Poste occupé" },
        duration: { type: "string", title: "Durée" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        { type: "Control", scope: "#/properties/company" },
        { type: "Control", scope: "#/properties/jobTitle" },
        { type: "Control", scope: "#/properties/duration" },
      ],
    },
  },
};

export const menu = {
  PersoInfo: {
    Title: "Informations Personnelles",
    subtitle: {
      subtile1: {
        name: "📝 Données de base",
        Link: schemas.base,
      },
      subtile2: {
        name: "📧 Coordonnées",
        Link: schemas.contact,
      },
      subtile3: {
        name: "🏡 Adresse",
        Link: schemas.address,
      },
    },
  },
  ProInfo: {
    Title: "Informations Professionnelles",
    subtitle: {
      subtile1: {
        name: "🎓 Éducation",
        Link: schemas.education,
      },
      subtile2: {
        name: "💼 Expérience",
        Link: schemas.experience,
      },
    },
  },
};
