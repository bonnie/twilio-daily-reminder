# Schedule a Daily SMS Reminder (Linux, MacOs or Windows)
### Code to accopmany the [Twilio Developer Voices blog post](http://blog.twilio.com).

## To install
1. [Fork](https://guides.github.com/activities/forking/) or [clone](https://github.com/git-guides/git-clone) this repository.
2. Run these commands in the top level directory of your forked or cloned project: 
   ```
   cp dotenv_template .env
   npm install
   ```
3. Complete the statements in the _.env_ file with your information
   a. [Sign up for Twilio credentials](https://www.twilio.com/try-twilio) if you don't have them, or find them in [your settings](https://www.twilio.com/console/project/settings) if you already have an account.
   b. The `TO_NUMBER` and `FROM_NUMBER` are the phone numbers to send your SMS "to" and "from". You can configure these in [your account](https://www.twilio.com/console/sms/getting-started/build).
4. Follow the blog post above to see how to send the SMS daily!
