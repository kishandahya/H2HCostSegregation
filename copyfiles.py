import sys
sys.path.append('/usr/local/lib/python3.10/site-packages')
import pyperclip

import os
import argparse
import pyperclip

def copy_files(directories, file_name_contains, search_string):
    if directories:
        directories = directories.split(',')
    else:
        directories = ['.']

    if search_string:
        search_string = search_string.split(',')

    for dir_path in directories:
        for root, dirs, files in os.walk(dir_path):
            for file in files:
                if file_name_contains in file and file.endswith('.jsx'):
                    file_path = os.path.join(root, file)
                    with open(file_path, 'r') as f:
                        content = f.read()
                        if search_string:
                            for string in search_string:
                                if string not in content:
                                    break
                            else:
                                pyperclip.copy('\n'.join(['_'*35, file, '_'*35, '\n\n', content]))
                        else:
                            pyperclip.copy('\n'.join(['_'*35, file, '_'*35, '\n\n', content]))

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Copy files containing a certain string in their filename to clipboard")
    parser.add_argument('--directories', dest='directories', default=None, help='Comma separated list of directories to search in. Default is the current directory')
    parser.add_argument('--file_name_contains', dest='file_name_contains', required=True, help='String that the filename should contain')
    parser.add_argument('--search_string', dest='search_string', default=None, help='Comma separated list of strings that the file content should contain')
    args = parser.parse_args()

    copy_files(args.directories, args.file_name_contains, args.search_string)
import argparse
import os
import fnmatch
import re
import pyperclip


def match_pattern(patterns, filename):
    for pattern in patterns:
        if fnmatch.fnmatch(filename, pattern):
            return True
    return False


def main(directories, file_name_contains, search_string):
    directories = directories.split(',')
    file_name_contains = file_name_contains.split(',')
    search_string = search_string.split(',')

    if not directories or directories[0] == "":
        directories = ['.']

    matched_files = []

    for directory in directories:
        for root, _, files in os.walk(directory):
            for file in files:
                if match_pattern(file_name_contains, file):
                    filepath = os.path.join(root, file)
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if all(re.search(pattern, content) for pattern in search_string):
                            matched_files.append((filepath, content))

    clipboard_content = []
    for filepath, content in matched_files:
        clipboard_content.append(f"___________________________________\n{filepath}\n____________________________________\n")
        clipboard_content.append(content)
        clipboard_content.append("\n\n")

    pyperclip.copy(''.join(clipboard_content))
    print("Copied to clipboard!")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Copy files content based on specified parameters")
    parser.add_argument('--directories', default="", help="List of directories to search, separated by commas")
    parser.add_argument('--file_name_contains', default="*", help="List of file name patterns, separated by commas")
    parser.add_argument('--search_string', default="", help="List of search strings, separated by commas")
    args = parser.parse_args()

    main(args.directories, args.file_name_contains, args.search_string)
