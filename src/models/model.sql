CREATE DATABASE IF NOT EXISTS urlshortener ;
USE urlshortener;

CREATE TABLE IF NOT EXISTS urls (
    id VARCHAR(6) PRIMARY KEY,
    original_url text NOT NULL,
    click_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)