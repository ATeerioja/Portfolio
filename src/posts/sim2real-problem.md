---
title: What I learned about Sim2Real from my Bachelor's thesis
date: 2025-06-09
summary: Why models trained in simulation stumble in the real world — and what closes the gap.
draft: false
---

When I started my Bachelor's thesis, I assumed that a policy trained to near-perfect
performance in simulation would mostly carry over to hardware. It did not. This post is
a short account of where the gap came from and the handful of things that actually moved
the needle.

## The reality gap

The **reality gap** is the mismatch between a simulator's model of the world and the
world itself. Friction, sensor noise, latency, and unmodeled dynamics all accumulate.
A controller that exploits a quirk of the simulator's physics will happily exploit it —
and that quirk does not exist on real hardware.

## What helped

A few techniques made the biggest difference for me:

1. **Domain randomization** — varying masses, friction, and sensor noise during training
   so the policy can't overfit to one exact physics configuration.
2. **Adding latency to the sim** — real actuators don't respond instantly, and modeling
   that delay during training mattered more than I expected.
3. **Keeping the observation space honest** — only feeding the policy signals I could
   actually measure on the real robot.

> The goal isn't a perfect simulator. It's a simulator imperfect in *enough different ways*
> that the policy learns to be robust rather than brittle.

## Takeaway

Sim2Real is less about closing the gap completely and more about training something that
doesn't care that the gap exists. That reframing is the single most useful thing I took
away from the project.
