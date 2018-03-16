pipeline {
  agent {
    docker 'node:6.3'
  }
  stages {
    stage('build') {
      steps {
        sh 'npm --version'
      }
    }
    stage('Npm test') {
      steps {
        fileExists 'package.json'
        sh 'npm test'
      }
    }
    stage('Push') {
      steps {
        git(url: 'https://github.com/jalutz/psychic-sniffle', branch: 'acceptance', changelog: true)
      }
    }
  }
}