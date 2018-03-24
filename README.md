These are scripts in some well known scripting languages which I used to measure interpreter overhead.

* **nop.\*:** Don't do anything, not even exit. In cases where it's more convenient to wait for a specific duration (which is all the cases), that's fine.
* **nc.\*:** Connect a socket as a client and copy data to stdout/from stdin.
