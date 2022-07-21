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
                bat 'npm run build'
            }
        }
        stage('e2e Tests') {
            steps {
                bat 'npm run cypress:run'
            }
        }
        stage('merge files') {
            steps {
                bat 'npm run merge-reports'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

    post {
        always {
            junit 'combined.xml'
            }                      
        }
    }
 
