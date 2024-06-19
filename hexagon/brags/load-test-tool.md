# Performance Test Tool

## Background

When I first joined the company, I had just graduated college. Because of that, my project manager wanted to take the time to get me familiar with the product through methods like shadowing and reading documentation. As a big part of this, they assigned me to create a end-to-end performance test tool with another junior developer.

## Libraries

For the user interface automation, we explored a few different libraries such as Puppeteer and Protractor. However, Selenium stood on top with the variety of features out of the box as well as it's large community base. PlayWright at this point in time was relatively new and wasn't largely recommended.

On the backend, we created a simple .NET console applicable with multiple threads calling API endpoints with dummy data.

## Solution

As a result, we created a script in which runs the user interface tool initially, which records console logs, network tab, and any UI errors with screenshots. The script then starts up a backend (running concurrently with the frontend) which sends PUT, POST, and DELETE API requests which generated UI updates. We even generated log files at the end of the test to use to compare statistics.
