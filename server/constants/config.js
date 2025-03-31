const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true); // Allows any origin
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};


const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
