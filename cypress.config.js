const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8080', // URL do servidor local
    viewportHeight: 880,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      // Use este espaço para configurar plugins, se necessário
    },
    supportFile: false, // Se não estiver usando um arquivo de suporte
  },
});
