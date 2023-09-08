pipeline {
  agent {
    docker {
      image 'cypress/base:18.14.1'
    }
  }

  stages {
    stage('build') {
      steps {
        echo "Debut installation dépendance"
        sh 'npm ci'
      }
    }


    stage('Cypress') {
          steps {
            echo "Debut des tests Cypress"
            sh "npm run ci:e2e"
          }
        }


  }
}