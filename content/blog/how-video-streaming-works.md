---
title: "How Video Streaming Actually Works: Protocols, Codecs, and the Basics"
date: "2026-08-27"
description: "A beginner-friendly breakdown of how video streaming works — what protocols and codecs are, how they differ, and why you need both."
---

You hit play on Netflix. Half a second later, video appears. No download bar, no "please wait" — it just plays.

That half-second is hiding a small miracle of engineering. This post pulls back the curtain on the two ideas that make it possible: **codecs** and **protocols**. Nothing here assumes prior networking or video knowledge — we're starting from zero.

---

## 1. What Is a Protocol?

Picture calling customer support. "Hello, how can I help you?" You explain your issue. They respond. You hang up. Nobody wrote this script down, but you both followed it anyway — because you share an unspoken protocol for how the conversation should go.

A **protocol** is exactly that, formalized for machines: an agreed-upon set of rules for how two systems talk to each other. It decides:

- How the connection starts
- How data gets chopped up and sent
- What order things happen in
- What happens when something goes wrong or gets lost
- How the conversation ends

You already know a few by name: **HTTP** (fetches web pages), **TCP** (delivers data reliably, no missing pieces), **UDP** (delivers data fast, no guarantees).

## 2. What Is a Video Streaming Protocol?

Now narrow that idea down to one job: getting video from a source (a server, a broadcaster's camera, a streamer's laptop) to your screen — smoothly, and ideally *while* it's still arriving, not after.

A video streaming protocol has to answer:

- How is the video sliced up for delivery?
- How does the player know which quality levels exist?
- What happens the moment your Wi-Fi dips?
- How does pause, seek, or "go live" work?
- How close to real-time can this actually be?

Every streaming protocol answers these questions a little differently, trading off **latency** (delay), **reliability**, **scale** (millions of viewers at once), and **device compatibility**.

## 3. Protocol vs Codec — The One Idea to Remember

If you take away nothing else from this post, take this:

```
Codec    = How the video is compressed
Protocol = How the video is delivered
```

Think of moving house. The **codec** is how cleverly you disassemble and pack your furniture into boxes. The **protocol** is the moving company — the truck, the route, the tracking number, what happens if a box gets lost.

Neither one works alone. A perfectly packed box nobody ships never arrives. A moving truck can't do anything useful with a room-sized, unboxed sofa. Streaming needs both, every single time.

And the stakes are real: one raw, uncompressed minute of 1080p video can weigh several *gigabytes*. Codecs shrink that down to something a phone can handle. Protocols then figure out how to get that shrunken file across the internet to you — live, in pieces, without you ever downloading the whole thing first.

## 4. What Are Codecs?

**Codec** = **co**der/**dec**oder. It's an algorithm that squeezes video down for storage or transmission, then unsqueezes it for playback.

This works because video is wildly repetitive. A talking-head clip barely changes frame to frame. A blue sky is just... blue, pixel after pixel after pixel. Codecs spot these patterns and throw away what's redundant or barely noticeable — which is why this is called *lossy* compression. Something real is discarded, ideally something your eyes were never going to catch anyway.

The **encoder** compresses at the source. The **decoder** on your device reverses it for playback — and it needs to speak the exact same codec, or it can't decode a single frame. That's why codec support quietly decides what plays where.

### Meet the Codecs

**H.264 / AVC** — The old reliable. Released in 2003, decodable by basically every device on Earth. Not the most efficient anymore, but still the safe default when compatibility matters most.

**H.265 / HEVC** — H.264's upgrade: roughly half the file size for the same quality, which matters a lot once you're talking 4K or HDR. The catch is licensing fees, which is why browser support is patchy even though Apple backs it fully.

**VP9** — Google's royalty-free answer to HEVC's licensing headache. Similar efficiency gains, no fees. You've streamed it without knowing — it's YouTube's workhorse, especially on Chrome and Android.

**AV1** — The new kid, built by a coalition that includes Google, Netflix, Amazon, and Apple. Royalty-free *and* more efficient than HEVC or VP9. The tradeoff has been heavier computational cost to encode and decode, but hardware support is catching up fast. This is where the industry is headed.

| Codec | Royalty-Free? | Efficiency | Support |
|---|---|---|---|
| H.264/AVC | No | Baseline | Nearly universal |
| H.265/HEVC | No | ~50% better than H.264 | Good, but patchy |
| VP9 | Yes | On par with HEVC | Strong on Chrome/YouTube |
| AV1 | Yes | Best of the four | Growing fast |

## 5. Four Protocols Worth Knowing by Name

**HLS (HTTP Live Streaming)** — Apple's format. Slices video into a few seconds at a time, listed in a playlist file, delivered over plain HTTP. Nearly universal support, scales beautifully on ordinary web infrastructure. Costs you a few seconds of delay.

**DASH** — HLS's open-standard cousin. Same chunk-and-playlist idea, but not tied to Apple. Powers YouTube and Netflix.

**RTMP** — A Flash-era protocol that refuses to die, because it's still how streamers *push* video to a server — think OBS sending your stream to Twitch. Rarely used to deliver video to viewers anymore, but very much alive on the upload side.

**WebRTC** — Built for sub-second, truly real-time delivery: video calls, live auctions, anything where a few seconds of lag would ruin it. Harder to scale to huge audiences than HLS or DASH, but nothing beats it for interactivity.

*(Each deserves its own deep dive — this is just enough to recognize the names.)*

## 6. Why You Need Both, Always

A codec by itself is just a compressed file sitting on a hard drive — it has no idea the internet exists. A protocol by itself has no idea how to represent an image — it just moves bytes.

Put them together and here's the whole pipeline:

1. A camera captures raw video
2. A **codec** (H.264, say) compresses it
3. A **protocol** (HLS, say) slices it into chunks and ships them over the internet
4. Your player downloads the chunks, hands them to a matching decoder, and paints the frames on screen

Swap the codec, and file size or quality shifts. Swap the protocol, and latency or compatibility shifts. They're independent, mix-and-match layers — which is exactly why you'll hear about "H.264 over HLS" for Netflix and "AV1 over WebRTC" for something built for real-time.

---

That's the foundation — protocols and codecs. Everything else in streaming builds on this pair.
