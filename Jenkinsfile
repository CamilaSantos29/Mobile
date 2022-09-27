pipeline {
    //The agent section specifies where the entire Pipeline, or a specific stage, 
    //will execute in the Jenkins environment depending on where the agent section is placed.
    agent any
    

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo "Building the application"
            }
        }
        stage('e2e Tests') {
            steps {
                bat 'npm run cypress:run'
            }
        }
      
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        
        stage('SonarQube Analysis') {
          def scannerHome = tool 'SonarQubeScanner-4.6.2';
          withSonarQubeEnv() {
           sh "${scannerHome}/bin/sonar-scanner"
    }
  }
} 
 }
  }

 
