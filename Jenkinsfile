pipeline {
  agent {
    docker 'node:8.10.0'
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
