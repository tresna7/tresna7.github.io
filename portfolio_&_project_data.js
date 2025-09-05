/** @format */

const portfolioData = [
  {
    id: "datascience",
    type: "certificate",
    title: "Understanding Data Science",
    issuer: "DataCamp",
    date: "30 September 2024",
    shortDescription: "Sertifikat penyelesaian dari DataCamp untuk pemahaman fundamental ilmu data.",
    longDescription: "Sertifikat ini menunjukkan pemahaman mendasar tentang konsep data science, peran seorang data scientist, alur kerja analisis data, dan pemanfaatan data dalam pengambilan keputusan bisnis.",
    image: "images/Screenshot 2025-09-01 163208.png",
    info_category: "Data Science Fundamentals",
    duration: "2 hours",
    provider: "DataCamp",
    completion_date: "30 September 2024",
    keySkills: [
      "Pengantar konsep dan alur kerja Data Science",
      "Pemahaman peran Data Scientist dalam organisasi",
      "Analisis data untuk pengambilan keputusan",
      "Eksplorasi machine learning secara umum",
      "Keterampilan analitik untuk data-driven insight",
    ],
    tools: [
      { name: "Python", logo: "fab fa-python" },
      { name: "Pandas", logo: "fas fa-cubes" },
      { name: "Matplotlib", logo: "fas fa-chart-bar" },
      { name: "Jupyter", logo: "fas fa-book" },
      { name: "ML Basics", logo: "fas fa-brain" },
    ],
  },
  {
    id: "pytorch",
    type: "certificate",
    title: "Introduction to Deep Learning with PyTorch",
    issuer: "DataCamp",
    date: "08 Oktober 2024",
    shortDescription: "Sertifikat pengenalan Deep Learning menggunakan library PyTorch dari DataCamp.",
    longDescription: "Sertifikat ini membuktikan penyelesaian kursus yang mencakup dasar-dasar PyTorch, cara membangun dan melatih jaringan saraf tiruan (neural networks) untuk tugas-tugas seperti klasifikasi gambar.",
    image: "images/depp_learning.png",
    info_category: "Deep Learning",
    duration: "4 hours",
    provider: "DataCamp",
    completion_date: "08 Oktober 2024",
    keySkills: [
      "Memahami tensor dan operasi dasar PyTorch.",
      "Membangun arsitektur Neural Network.",
      "Melatih dan mengevaluasi model deep learning.",
      "Implementasi konsep optimisasi dan loss functions.",
      "Aplikasi model untuk klasifikasi gambar.",
    ],
    tools: [
      { name: "Python", logo: "fab fa-python" },
      { name: "PyTorch", logo: "fas fa-brain" },
      { name: "Jupyter", logo: "fas fa-book" },
      { name: "NumPy", logo: "fas fa-calculator" },
      { name: "Scikit-learn", logo: "fas fa-cogs" },
    ],
  },
];

const projectData = [
  {
    id: "math-space-shooter",
    title: "Math Space Shooter",
    category: "Game Development",
    categoryIcon: "fas fa-gamepad",
    shortDescription: "Game edukasi 2D berbasis Lua yang menggabungkan gameplay space shooter dengan tantangan matematika.",
    longDescription: "Sebuah game 2D retro space shooter yang menguji refleks dan kemampuan matematika, dibangun menggunakan LÖVE 2D framework dengan bahasa Lua.",
    githubUrl: "https://github.com/tresnadhani/math-space-shooter",
    // FIX: Renamed gameplayUrl to demoUrl to be more universal
    demoUrl: "https://drive.google.com/file/d/1af2QRTQoUKujR_R3roAzLs5ZIKZuVDg2/view?usp=sharing",
    downloadUrl: "https://drive.google.com/drive/folders/1AoJwqopXUeGHc6qs3ipgxUEZCdSCPUul?usp=sharing",
    mainVideo: "images/menu_utama.mp4",
    overview: [
      "Math Space Shooter adalah game 2D yang menggabungkan genre klasik space shooter dengan elemen edukasi matematika. Pemain harus menghancurkan asteroid yang datang dengan cara menjawab soal matematika sederhana yang muncul.",
      "Tujuan dari proyek ini adalah untuk menciptakan pengalaman belajar yang menyenangkan dan interaktif, terutama bagi pemain muda, dengan mengubah latihan matematika menjadi sebuah tantangan yang seru. Game ini dirancang untuk dapat dimainkan dengan lancar di berbagai perangkat, baik desktop (laptop) maupun mobile (HP).",
    ],
    galleryImages: [
      { src: "images/menu-utama.png", caption: "Tampilan Menu Utama" },
      { src: "images/gameplay.png", caption: "Gameplay" },
      { src: "images/game-over.png", caption: "Tampilan Game Over" },
    ],
    techStack: [
      { name: "Lua", icon: "fas fa-code" },
      { name: "LÖVE 2D", icon: "fas fa-heart" },
    ],
    keyFeatures: [
      { icon: "fas fa-graduation-cap", title: "Gameplay Edukatif", description: "Mengasah kemampuan matematika dasar." },
      { icon: "fas fa-rocket", title: "Kontrol Responsif", description: "Kontrol yang sederhana dan mudah dipelajari." },
      { icon: "fas fa-infinity", title: "Level Bervariasi", description: "Tingkat kesulitan yang terus meningkat." },
      { icon: "fas fa-palette", title: "Grafis Retro", description: "Gaya visual pixel art yang menarik." },
    ],
    projectInfo: {
      status: "Completed",
      category: "Game Edukasi",
      teamSize: "1 (Proyek Solo)",
      client: "Proyek Pribadi",
    },
    codeSnippet: {
      language: "lua",
      code: `function love.load()\n  player = { x = 400, y = 500, speed = 200 }\n  asteroids = {}\n  score = 0\n\n  font = love.graphics.newFont(24)\nend\n\nfunction spawnAsteroid()\n  local asteroid = {\n    x = math.random(0, 800),\n    y = -50,\n    speed = math.random(50, 150),\n    question = math.random(1, 5) .. " + " .. math.random(1, 5)\n  }\n  table.insert(asteroids, asteroid)\nend`,
    },
  },
  {
    id: "real-time-monitor",
    title: "Real-time Data Monitor",
    category: "Data Engineering",
    categoryIcon: "fas fa-database",
    shortDescription: "Streaming data dan anomaly detection dengan dashboard interaktif real-time.",
    longDescription: "Proyek ini berfokus pada pembangunan pipeline data streaming untuk memonitor metrik secara real-time dan mendeteksi anomali menggunakan algoritma statistik.",
    githubUrl: "#",
    // FIX: Renamed gameplayUrl to demoUrl to be more universal
    demoUrl: "#",
    downloadUrl: "#",
    mainVideo: "https://placehold.co/1280x720/0b0b0c/e9e9ea.mp4?text=Video+Preview",
    overview: [
      "Dashboard ini memungkinkan pemantauan data secara langsung saat data masuk. Dibangun dengan teknologi streaming modern untuk memastikan latensi rendah dan keandalan tinggi.",
      "Sistem deteksi anomali secara otomatis menandai titik data yang tidak biasa, memungkinkan respons cepat terhadap masalah potensial.",
    ],
    galleryImages: [
      { src: "https://placehold.co/800x450/0b0b0c/e9e9ea?text=Dashboard+View", caption: "Tampilan Dashboard Utama" },
      { src: "https://placehold.co/800x450/111214/b5b5b7?text=Anomaly+Alert", caption: "Notifikasi Anomali" },
    ],
    techStack: [
      { name: "Kafka", icon: "fas fa-stream" },
      { name: "Spark", icon: "fas fa-fire" },
      { name: "Grafana", icon: "fas fa-chart-line" },
    ],
    keyFeatures: [
      { icon: "fas fa-wave-square", title: "Data Streaming", description: "Memproses data dengan latensi sangat rendah." },
      { icon: "fas fa-bell", title: "Deteksi Anomali", description: "Peringatan otomatis untuk data di luar normal." },
      { icon: "fas fa-chart-bar", title: "Visualisasi Interaktif", description: "Dashboard yang mudah dipahami dan digunakan." },
    ],
    projectInfo: {
      status: "In Progress",
      category: "Data Monitoring",
      teamSize: "2",
      client: "Proyek Internal",
    },
    codeSnippet: {
      language: "python",
      code: `from pyspark.sql import SparkSession\nfrom pyspark.sql.functions import from_json, col\n\n# Create a SparkSession\nspark = SparkSession.builder \\\n    .appName("RealTimeMonitor") \\\n    .getOrCreate()\n\n# Read from Kafka topic\ndf = spark.readStream \\\n    .format("kafka") \\\n    .option("kafka.bootstrap.servers", "localhost:9092") \\\n    .option("subscribe", "metrics") \\\n    .load()\n\n# Process and display the data\nquery = df.selectExpr("CAST(value AS STRING)") \\\n    .writeStream \\\n    .outputMode("append") \\\n    .format("console") \\\n    .start()`,
    },
  },
];
