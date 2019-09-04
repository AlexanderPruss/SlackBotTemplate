import axios from 'axios';
import slackConfig, {SlackConfig} from "../SlackConfig";

/**
 * The event service is the main orchestrator of the app.
 */
class EventService {

    config: SlackConfig = slackConfig;

    public async handleEvent(event: EventData) {
        console.log("Handling event");
        console.log(event.channel);
        this.respondWithMessage("message", event.channel);
    }

    public async respondWithMessage(message: string, channel: string) {
        console.log("Sending response message.");
        axios.post("https://slack.com/api/chat.postMessage",
            {
                text: message,
                channel: channel
            },
            {
                headers: {
                    Authorization: this.config.botSecret
                }
            });
    }

}

/**
 * This is an aid in deserializing Slack events.
 */
export class IncomingSlackEvent {
    event: EventData;
}

class EventData {
    text: string;
    channel: string;
}

export default new EventService();