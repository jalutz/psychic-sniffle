pipeline {
  agent {
    docker 'node:8.10.0'
  }
  stages {
    stage('build') {
      steps {
        sh '''npm --version
'''
        sh 'npm install'
      }
    }
    stage('Npm test') {
      steps {
        sh '''cd ui
npm test'''
      }
    }
    stage('Push') {
      steps {
        git(url: 'https://github.com/jalutz/psychic-sniffle', branch: 'acceptance', changelog: true)
      }
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
  }
}