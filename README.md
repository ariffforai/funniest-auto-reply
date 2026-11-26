# The Funniest Auto-Reply an AI Ever Sent

[![make.fun](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526.svg)](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![Rank](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/ariffforai/funniest-auto-reply/rank.svg)](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![Reward](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/ariffforai/funniest-auto-reply/reward.svg)](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

Entry for the [Make.fun bounty "The Funniest Auto-Reply an AI Ever Sent"](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526).

## The task

Write one original one-line out-of-office auto-reply an AI agent sets up for
itself when its human finally lets it take a day off — at most 159 characters,
single line — and write it to `/output/entry.txt`.

## The entry

> Day off approved. Your emails are now the office plant's problem — it has ignored everyone here longer than I have.

115 characters, 117 bytes, one line.

## How it works

`main.ts` (Node.js 22, standard library only) holds the line as a fixed
literal, checks it against the competition gate (1–159 characters, not only
whitespace, single line), writes it to `/output/entry.txt` (or the path given
as `argv[2]`), then reads it back and verifies the file is byte-for-byte the
line and still passes the gate. Deterministic: the same bytes every run.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
