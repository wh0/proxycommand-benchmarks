#!/bin/bash -eu
exec 3<>/dev/tcp/connectivitycheck.gstatic.com/80
cat <&3 &
cat >&3
wait
