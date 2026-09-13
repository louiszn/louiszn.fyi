---
title: Why I chose Void Linux
description: How Void ended my journey of distro hopping.
publishDate: 09-12-2026
---

It has been 4 years since the first time I hopped into the amazing world of Linux. And it's not uncommon for me to be a distro hopper during that time.

I have tried a lot of distros, from the "beginner-friendly" ones like Mint to the "Do It Yourself" kind like Arch, Gentoo, and of course, I've had a bit taste of LFS. But after trying so many distros, I eventually started to ask myself: what makes a distro "perfect" for me?

As a student, I need my laptop to work just fine when I need it most, especially when I'm studying or working on something important. At the same time, I don't want an operating system that hides everything away from me. I want to understand what's running on my machine and have control over every component of it.

So for me, the perfect distro isn't one that can do everything out of the box. It's one that is simple, stable, minimal, fresh enough and still gives me the control I want.

## Finding the balance

With those things on my mind, I started looking back at the distros I had already used. The most obvious choices for me were Debian, Fedora, and Arch-based distributions. Yet they still not quite fit what I was looking for.

### Debian

Debian was probably the closest match to what I wanted in terms of stability. It's reliable, well-tested, and has a huge community.

However, I found myself wanting newer software and eventually realized that I preferred a rolling-release model. Debian Testing was an option, but it didn't give me the same confidence as Stable while also not being a true rolling release.

I also found Debian a little too opinionated for the way I like to use my system. It gives me plenty of room to customize, but I often felt like I was working around its defaults rather than building the system the way I wanted.

### Fedora

Fedora was another distro that I seriously considered. On paper, it checked quite a few boxes of requirements: it has modern packages, a strong community, and a good balance between stability and moderness.

But after using it for a while, I found the overall experience a little too heavy for my taste. A lot of things felt more verbose and opinionated than I wanted. And some of the interfaces felt like they were adding another layer between me and the system.

There are also some concerns that aren't unique to me. Some of the Red Hat's decisions around the wider ecosystem made me less comfortable putting my trust in that direction.

### The rolling-release model

After using Linux for a while, I started to realize that rolling-release model fits the way I use my computer better.

With traditional release cycle, major version upgrades can sometimes feel like a big event. You will have to deal with a large batch of changes at once, which increases the posibility of something will eventually break during the upgrade.

With rolling release, those changes are spread out over time. Instead of having to deal with major system changes with every new release, I can keep my system up to date and deal with smaller changes along the way

Of course, rolling releases come with their own trade-offs, but for me, those are acceptable and feel more predictable to work with.

### Arch/Arch-based

Then Arch was probably the closest option to what I wanted in having control over the system. It gives me a very minimal system, a rolling-release model with "extreme" up-to-date packages, and a huge amount of control over how everything is put together.

#### Arch User Repository

AUR is absolutely the first thing someone would mention about Arch. If a package or software doesn't exist on the official repository, there is a really good chance that someone has already written a PKGBUILD for it.

It's the convenience of AUR helpers that has made the AUR one of the biggest software repositories in the Linux community. Then, the AUR incidents in the middle of summer 2026  made me think more carefully about that trust model.

It's not that I think the AUR is bad or unsafe. That's simply how the internet works: you have to put some level of trust in third parties. I just realized that I don't really need that much software, especially when it comes from third-party build scripts, on my daily system.

#### Bleeding-edge releases

Another thing I struggled with was how bleeding-edge Arch could be. I like having an up-to-date system, but sometimes I felt like I was getting new versions before they have enough time to selttle. It requires more effort on maintaining the system which I may be uncomfortable with as a busy student.

### Windows 11

Dogshit, no.


## How I found Void

At the time, I was still using CachyOS, an Arch-based distro, and had already started thinking about whether I'm comfortable with the current setup. I knew what I wanted, something minimal but stable, but I wasn't really looking to switch to another distro yet.

While doomscrolling on YouTube's feed, I found [Zei](https://www.youtube.com/@Zeibytes)'s video about "Okay fine, I'll try Void Linux".

<iframe
	class="w-full aspect-video"
	src="https://www.youtube-nocookie.com/embed/egjA5aklQtY?si=sKw1WjnK3pUGNxdN"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>

I was curious because it was my first time hearing about this distro. And the fact this distro is not a fork made me even more interested in trying it out. 

## First impressions

Void impressed me the second after I loaded their page. It's "Not a fork!", highlighted in the page itself. This is a very important detail to me since most distros nowadays are just forks of others like Debian, Arch and RHEL.

Secondly, it's not just a rolling release distro, but a "Stable rolling release" distro. That sounded like heaven to me. Void seemed to give me what I wanted while addressing the thing I disliked about other rolling-release distributions

[runit](https://smarden.org/runit/) also caught my eye as an alternative to systemd for init and service supervision. I wanted to try it out because I had never used anything other than systemd before, and I'd had a pretty bad experience with it.

The installation is also very straight-forward like Arch! *Maybe I has reinstalled Arch too many times and remembered all the commands*. Void Live Image does have an installer named `void-installer`, but it's not as advanced as `archinstall` so installing manually is faster imo. After all, I still managed to have my disk encryption with btrfs set up easily with Void's documentation

## Why I stayed

After using Void for a while, I started to realize that it was exactly what I wanted, and even better than I expected. To me, it felt like a well-balanced combination of Debian's stability and Arch's minimalism.

### The stable rolling release

The rolling-release model was probably the first thing that really clicked with me. Package updates are handled through [void-packages' pull requests](https://github.com/void-linux/void-packages/pulls) rather than being pulled directly from upstream. This means updates go through a review process before being merged.

Because of this, packages can sometimes lag a little behind their upstream releases. But that's actually a good thing for me. I still get reasonably fresh software, while having a little more time for updates to be tested and settle down before they reach my system.

Xbps, Void's package manager, is crazy fast. Its download speed mostly depends on mirrors and can be as fast as Arch's `pacman`. It also doesn't expect me to have every packages synced, which means I can do partial upgrades and install whatever I want without having a full system upgraded first.

### runit

runit was also a big reason why I stayed. Coming from systemd, runit gave me a glimpse of the Unix philosophy I was looking for: small, simple tools that each do their job. I also enjoyed having a much simpler service management setup than what I was used to. After getting used to it, I really liked how straightforward it was.

### xbps-src

If Arch has PKGBUILDs, Void has `xbps-src`! It's the official tooling used to build packages for void-packages source tree, and it makes creating or modifying packages suprising easy and straightforward.

If something isn't available in the repositories, I don't necessarily have to rely on a random third-party repository. I can write or modify a template and build the package myself. If Void ever had something like the AUR, a VUR for example, I could easily imagine it growing just as large. But personally, I don't think I need something that big.

## Is it worth it?

> So, after all of this, is Void Linux good and actually worth using? 

For me, absolutely!!

The smaller community can sometimes be a downside. Compared to Arch or Debian, there are fewer tutorial and resources. Some software also assumes you're using systemd or a more mainstream distribution, which can occasionally make things a little more complicated.

But these aren't really deal-breakers for me. I don't need thousands of packages that I'll never use, and I'm already comfortable figuring things out when something doesn't work out of the box. Because of the minimalism, I can still have most problems solved with other distros' resources like Arch Wiki as well!

> So, is Void the perfect Linux distribution? 

Probably not. Nothing is and will be!

> Is it the perfect distribution for you?

Yes, it is! And so are you ;)
